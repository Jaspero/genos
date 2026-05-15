import admin from "firebase-admin";
import { C as CONFIG } from "./config.const.js";
const type = "service_account";
const project_id = "genos-ec52a";
const private_key_id = "9fdd21a9be73bce6c47b25eb99d87bb5c90cb9a9";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDhWfXgO66JIFK/\n9CM3BqqY9yYObRoe/YKI5MWiBHGhWAEtRNkSYMSFErUBLD8tUcHDu5vI+fKZBG2z\nGXPwn6bvvJIPRPBnzEow59jVyNYwGr0ZRTOgR0I7wjDG8qa9BtLao/MU71Lv0k96\nRQfG88/DNyYPl2Cpp6fipF4nEyAhgSwCa420o+Xy5lGcFK3DdeT9eskhjrYl4f6P\nnuIR8e7X4oN6oBvuXBLPO2mONW4mRmEtuv4Xmr4U3Fx343a31xxkp7qDclcRmPIu\nu3+p6uPjrp1JHnklRfJSscFPZoOwh7t+v6ZIoswhVqEZbhCkvyVoeABCmOcUzClw\ngi8Z+lm1AgMBAAECggEAEhYyUcj4fTEG8zkZCnWSg6xydX30NsCKFYqnAhXxOM3j\nakq4UW1K2JNjy7BNccm6D4ejPUIyYm2kkFdeotVthJhR8L/Lu8j9u2cgVChGaJ38\nx2Zyek691iYD3DPlhg5iJgI6pFeBBJaQonOf6CvxZO2sNFwl+ffm1Z3zoJc8YPPi\njlGE/EK4H8xy9QQCqzurSJhduFAA9A/bBj4pLFaV126pnILuNpEi5LknrJwAC0To\n3fH0ZiYhFHNKP1xS3oG8v/4d7fzMlTM6q6Fc0PLpydHKrlZ+UomtnyXH3ZpecBRs\n3Lr803ghopW3GAhC98B1R6FCzE5BdGPrp7zJF2IekQKBgQDpkV4lrnpse9uleEZW\nSgQQ36/ULpGzofeUubOmU6Av0DEu3E8I5cekoPEv+QSGtNQwXoHEaZ8rjLZEO9pm\npKfDAWOe6njBzfvckCBP+i4aW/nEVy1Wj9YJiycrrmyxAIGZMDA7vBTbe3vDeKIR\npJ6qO9luS6NzqBusL2KYLOJfNwKBgQD2/pQoFVx2CG/3BOcUvLBkW+lojd3+nloz\nztpTLX3U7ipeZHin422eXsMZkeW6HneijnQZKd5ojP9q19ispupGa39kAyK6vUu3\nQb5mquI6BIPDuBDV1LUDBUhxQRYMlQTri+QGXZc7E68tKnb4k1SatSisK3hh+DSs\nMCpBpkUMcwKBgC4EZfgmmBgnju7a84CstIBekdXMFwi9MHos3Cg48aZ57ja9URT/\nsIXO77Xz6eBgYC3ncMmxxZpe7soiwLTYW/UfoPD+YSxN2QFro/Id6FdpJ5x3UIdt\nb04SDHWet+tnniEATYB3XeSgP5ITglrXhCsl/4CrhliTFmCmNVamATOhAoGAPIXX\nUhch5/5bSUFXSnqOEpl/EVKqEilFWyqVzwn3qoSNt0GRWzpccxEvZ4WbsEak9B1K\nD5x11lKuh8TKYEwqXgUbWyt1iCK4efhPKqM2+hZ/HydsYKlVjZ7uyGm1eHHPmdRW\nlMS8OQqywzODoZeghKRdigrA3ejPJ15KDHoss0cCgYBvy7vHctXm9/RZBhw1YXpN\nuH3dlbyNNL/u8hKHw2/+7TElEnfdsYUp9SVRTCZu+4LKypR+QgqmvQWBR8Igoq7b\nj/yoGR4asWSPMVcgWDsHGhHt2crFud25SkllduNX4BIstf0NVFO1BGrDkwWE7ko0\noa7Wtg3eaFUyPxTmuVCj2A==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-40rj6@genos-ec52a.iam.gserviceaccount.com";
const client_id = "118349600025775880348";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-40rj6%40genos-ec52a.iam.gserviceaccount.com";
const universe_domain = "googleapis.com";
const credential = {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
  universe_domain
};
const app = admin.initializeApp(
  {
    credential: admin.credential.cert(credential),
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
