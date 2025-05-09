import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { hasRole } from '../shared/utils/authenticate';
import { getAuth, UserRecord } from 'firebase-admin/auth';
import { random } from '@jaspero/utils';
import { getFirestore } from 'firebase-admin/firestore';
import { REGION } from '../shared/consts/region.const';
import { DateTime } from 'luxon';
import { logger } from 'firebase-functions/v2';

interface RequestData {
  email: string;
  role: string;
  name: string;
  password?: string;
}

export const createAdmin = onCall<RequestData>(
  { maxInstances: 1, region: REGION },
  async (request) => {
    hasRole(request, ['admin']);

    const auth = getAuth();
    const firestore = getFirestore();
    const { role, name } = request.data;
    const password = request.data.password || random.string(32);

    if (!role || !name || !request.data.email) {
      throw new HttpsError('invalid-argument', 'Missing required fields');
    }

    const email = request.data.email.replace(/ /g, '').toLowerCase();

    const adminsRef = await firestore
      .collection(role + 's')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (!adminsRef.empty) {
      throw new HttpsError('already-exists', role + ' already exists');
    }

    let user: UserRecord | null = null;

    try {
      user = await auth.getUserByEmail(email);
    } catch (e: any) {
      logger.info('Fetching user failed. Creating new one instead.', e);
    }

    if (!user) {
      try {
        user = await auth.createUser({ email, password });
      } catch (e: any) {
        throw new HttpsError('internal', e.message);
      }
    }

    await Promise.all([
      auth.setCustomUserClaims(user.uid, { role }),
      firestore
        .collection(role + 's')
        .doc(user.uid)
        .set({
          createdOn: DateTime.now().toUTC().toISO(),
          email,
          name,
          role
        })
    ]);
  }
);
