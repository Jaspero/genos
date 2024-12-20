import { EmailService } from '../email/email.service';
import * as admin from 'firebase-admin';
import { DateTime } from 'luxon';
import { logger } from 'firebase-functions/v2';
import { compile } from 'handlebars';

export class NotificationService {
  static async sendNotifications(context: any, notifications: string[]) {
    const fs = admin.firestore();
    const emailService = new EmailService();

    const results = await Promise.allSettled(
      notifications.map(async (id) => {
        const notificationRef = await fs.collection('notifications').doc(id).get();

        if (!notificationRef.exists) {
          throw new Error(`Notification with id ${id} not found`);
        }

        const notificationData = notificationRef.data() as {
          channels: string[];
          content: string;
          name: string;
        };

        if (!notificationData.channels?.length) {
          return;
        }

        for (const channel of notificationData.channels) {
          const channelRef = await fs.collection('notification-channels').doc(channel).get();

          if (!channelRef.exists) {
            throw new Error(
              `Notification with id ${id} is missing the channel with id ${channel}.`
            );
          }

          const channelData = channelRef.data() as {
            emails: string[];
            roles: string[];
            type: string;
            emailTemplate?: string;
          };

          switch (channelData.type) {
            case 'email':
              if (!channelData.emails.length) {
                throw new Error(
                  `Notification with id ${id} is missing emails for channel with id ${channel}.`
                );
              }

              const html = !channelData.emailTemplate && compile(notificationData.content)(context);

              await Promise.all(
                channelData.emails.map((email) => {
                  if (channelData.emailTemplate) {
                    return emailService.parseEmail(
                      channelData.emailTemplate,
                      context,
                      email,
                      {subject: notificationData.name}
                    );
                  }

                  return emailService.sendEmail({
                    subject: notificationData.name,
                    to: email,
                    html
                  });
                })
              );

              break;
            case 'cms':
              if (!channelData.roles.length) {
                return;
              }

              const users = await Promise.all(
                channelData.roles.map((role) => fs.collection(role + 's').get())
              ).then((querySnapshots) => {
                return querySnapshots.reduce((acc: string[], querySnapshot) => {
                  acc.push(...querySnapshot.docs.map((doc) => doc.id));
                  return acc;
                }, []);
              });

              if (!users.length) {
                return;
              }

              const batch = fs.batch();
              const content = compile(notificationData.content)(context);

              users.forEach((userId) => {
                batch.set(fs.collection('cms-notifications').doc(), {
                  name: notificationData.name,
                  content,
                  userId: userId,
                  createdOn: DateTime.now().toUTC().toISO()
                });
              });

              await batch.commit();

              break;
            default:
              throw new Error(
                `Notification with id ${id} has an invalid channel type: ${channelData.type}.`
              );
          }
        }
      })
    );

    const errors = results.filter((result) => result.status === 'rejected');

    if (errors.length) {
      logger.error('Error sending notifications', errors);
    }
  }
}
