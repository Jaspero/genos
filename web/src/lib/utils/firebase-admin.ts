import admin from 'firebase-admin';
import { CONFIG } from '../consts/config.const';

const app = admin.initializeApp(
  {
    credential: admin.credential.applicationDefault(),
    storageBucket: CONFIG.storageBucketName + '.firebasestorage.app'
  },
  'app-' + Date.now()
);

export const firestore = app.firestore();
export const bucket = app.storage().bucket();
