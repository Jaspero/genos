import {ENV_CONFIG} from '../../env-config.js';

let _firebase;
let loading = false;

async function wait(time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}

export async function firebase() {
  if (_firebase) {
    return _firebase;
  }

  if (loading) {

    while (loading) {
      await wait(100);

      if (!loading) {
        return _firebase;
      }
    }

  }

  loading = true;

  const fb = (await import('firebase/app')).default;

  await Promise.all([
    import('firebase/firestore')
  ]);

  fb.initializeApp(ENV_CONFIG.firebase);

  _firebase = fb;

  loading = false;

  return _firebase;
}
