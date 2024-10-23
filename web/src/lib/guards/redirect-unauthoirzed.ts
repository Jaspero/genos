import { authenticated } from '../utils/firebase';
import { goto } from '$app/navigation';

export async function redirectUnauthorized(path = '/sign-in') {
  const user = await new Promise((resolve) => {
    const unsub = authenticated.subscribe((data) => {
      if (data === null) {
        return;
      }

      try {
        unsub();
      } catch {};

      resolve(data);
    });
  });

  if (!user) {
    goto(path);
  }

  return user;
}
