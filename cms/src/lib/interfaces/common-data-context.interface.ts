import type { FirestoreUser } from '$lib/interfaces/firestore-user.interface';
import type { IdTokenResult } from 'firebase/auth';

export interface CommonDataContext {
  user?: FirestoreUser | null;
  token?: IdTokenResult | null;
}
