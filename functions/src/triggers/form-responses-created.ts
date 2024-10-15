import * as functions from 'firebase-functions';
import { FirestoreCollections } from '../shared/enums/firestore-collections.enum';
import * as admin from 'firebase-admin';
import { EmailService } from '../shared/services/email/email.service';
import { EMAIL_CONFIG } from '../shared/services/email/email-config.const';

export const formResponsesCreated = functions
  .runWith({
    memory: '512MB',
    timeoutSeconds: 540
  })
  .firestore.document(`${FirestoreCollections.Forms}/{formId}/form-responses/{responseId}`)
  .onCreate(async (snap, context) => {
    const fs = admin.firestore();
    const { formId } = context.params;
    const formData = (
      await fs.collection(FirestoreCollections.Products).doc(formId).get()
    ).data() as { notifications: string[] };

    if (!formData.notifications?.length) {
      return;
    }

    const emailService = new EmailService();

    const notificationsData = await Promise.all(
      formData.notifications.map(
        async (notificationId) =>
          (
            await fs.collection(FirestoreCollections.Notifications).doc(notificationId).get()
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
              await fs.collection(FirestoreCollections.NotificationChannels).doc(channelId).get()
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

          const users = await fs.collection(FirestoreCollections.Admins).where('role', 'in', channel.roles).get();

          await Promise.all(
            users.docs.map(user =>
              fs.collection(FirestoreCollections.Notifications).add({
                name: notification.name,
                content: notification.content,
                userId: user.id,
                seen: false
              })
            )
          );
        }
      }
    }
  });
