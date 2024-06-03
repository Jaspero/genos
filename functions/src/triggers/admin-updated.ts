import {getAuth} from 'firebase-admin/auth';
import {onDocumentUpdated} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';

export const adminUpdated = onDocumentUpdated({
  region: REGION,
  document: 'admins/{adminId}'
}, async (event) => {
  const newValue = event.data!.after.data();
  const oldValue = event.data!.before.data();

  if (newValue.role !== oldValue.role) {
    await getAuth().setCustomUserClaims(event.data!.after.id, {role: newValue.role});
  }
});
