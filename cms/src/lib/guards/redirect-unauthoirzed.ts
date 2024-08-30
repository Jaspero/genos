import { redirect } from '@sveltejs/kit';
import { auth, token } from '../utils/firebase';
import { signOut } from 'firebase/auth';

export async function redirectUnauthorized(path = '/') {
  const user = await new Promise((resolve) => {
    const unsub = token.subscribe(async (data) => {
      if (data === null || !data.claims || data.claims.role !== 'admin') {
        if (data) {
          await signOut(auth);
        }
      }

      try {
        unsub();
      } catch {}

      resolve(data);
    });
  });

  if (!user) {
    throw redirect(301, path);
  }

  return user;
}
