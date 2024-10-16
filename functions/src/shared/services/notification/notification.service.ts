import { EmailService } from '../email/email.service';
import { EMAIL_CONFIG } from '../email/email-config.const';
import * as admin from 'firebase-admin';
import { DateTime } from 'luxon';

export class NotificationService {
  static async sendNotifications(notifications: string[]) {
    const fs = admin.firestore();
    const emailService = new EmailService();

    const notificationsData = await Promise.all(
      notifications.map(
        async (notificationId) =>
          (
            await fs.collection('notifications').doc(notificationId).get()
          ).data() as {
            channels: string[];
            content: string;
            name: string;
          }
      )
    );

    for (const notification of notificationsData) {
      const channelsData = await Promise.all(
        notification.channels.map(
          async (channelId) =>
            (
              await fs.collection('notification-channels').doc(channelId).get()
            ).data() as {
              emails: string[];
              roles: string[];
              type: string;
            }
        )
      );

      for (const channel of channelsData) {
        if (channel.type === 'email') {
          if (!channel.emails.length) {
            return;
          }

          await emailService.sendEmail({
            subject: notification.name,
            to: EMAIL_CONFIG.fromEmail,
            bcc: channel.emails,
            html: notification.content
          });
        } else {
          if (!channel.roles.length) {
            return;
          }

          const users = await Promise.all(
            channel.roles.map(role => fs.collection(role + 's').get())
          ).then((querySnapshots) => {
            return querySnapshots.reduce((acc: string[], querySnapshot) => {
              acc.push(...querySnapshot.docs.map((doc) => doc.id));
              return acc;
            }, [])
          });

          if (!users.length) {
            return;
          }

          await Promise.all(
            users.map(userId =>
              fs.collection('cms-notifications').add({
                name: notification.name,
                content: notification.content,
                userId: userId,
                createdOn: DateTime.now().toUTC().toISO()
              })
            )
          );
        }
      }
    }
  }
}
