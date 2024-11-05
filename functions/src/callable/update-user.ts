import { onCall } from 'firebase-functions/v2/https';
import { REGION } from '../shared/consts/region.const';
import { hasRole } from '../shared/utils/authenticate';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

export const updateUser = onCall({ maxInstances: 1, region: REGION }, async (request) => {
  hasRole(request, ['admin']);

  const auth = getAuth();
  const fs = getFirestore();
  const { collection, ...data } = request.data.data;

  await auth.updateUser(request.data.id, data);

  if (collection && data.email) {
    await fs.collection(collection).doc(request.data.id).update({
      email: data.email
    });
  }
});
