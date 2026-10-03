import admin from "firebase-admin";
import { C as CONFIG } from "./config.const.js";
const app = admin.initializeApp(
  {
    credential: admin.credential.applicationDefault(),
    storageBucket: CONFIG.storageBucketName + ".firebasestorage.app"
  },
  "app-" + Date.now()
);
const firestore = app.firestore();
const bucket = app.storage().bucket();
export {
  bucket as b,
  firestore as f
};
