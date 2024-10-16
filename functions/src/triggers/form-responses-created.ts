import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';
import { NotificationService } from '../shared/services/notification/notification.service';

export const formResponsesCreated = onDocumentCreated(
  {
    document: `forms/{formId}/form-responses/{responseId}`,
    memory: '512MiB',
    timeoutSeconds: 540
  },
  async (event) => {
    const fs = admin.firestore();
    const { formId } = event.params;
    const ref = fs.collection('forms').doc(formId);
    const formData = (
      await ref.get()
    ).data() as { notifications: string[] };

    await ref.update({
      responses: admin.firestore.FieldValue.increment(1)
    });

    if (!formData.notifications?.length) {
      return;
    }

    await NotificationService.sendNotifications(event.data?.data(), formData.notifications);
  }
);
