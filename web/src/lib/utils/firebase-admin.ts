import admin from 'firebase-admin';
import credential from '../../../key.json';
import { CONFIG } from '../consts/config.const';

const app = admin.initializeApp(
  {
    credential: admin.credential.cert(credential as any),
    storageBucket: CONFIG.storageBucketName + '.appspot.com'
  },
  'app-' + Date.now()
);

export const firestore = app.firestore();
export const bucket = app.storage().bucket();
