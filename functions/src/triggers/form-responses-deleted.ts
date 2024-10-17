import { onDocumentDeleted } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';

export const formResponsesDeleted = onDocumentDeleted(
  {
    document: `forms/{formId}/form-responses/{responseId}`
  },
  async (event) => {
    const fs = admin.firestore();
    const { formId } = event.params;

    await fs
      .collection('forms')
      .doc(formId)
      .update({
        responses: admin.firestore.FieldValue.increment(-1)
      });
  }
);
