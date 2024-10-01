/**
 * Intended for updating release status from firestore
 */
const admin = require('firebase-admin');
const { writeFile } = require('fs/promises');

admin.initializeApp({
  credential: admin.credential.cert(require('./key.json'))
});

const release = process.argv[2];

const COLLECTION_CONFIG = {
  products: {
    generateIndex: true,
    keys: ['name', 'category', 'tags']
  },
  categories: {
    generateIndex: true,
    keys: ['name']
  },
  tags: {
    generateIndex: true,
    name: ['name']
  }
}

async function exec() {
  const fs = admin.firestore();

  const document = (config) => config.keys.reduce((acc, key) => {
    let shortKey = key[0];
    let count = 1;

    while (acc[shortKey]) {
      shortKey = key[0] + count;
      count++;
    }

    acc[shortKey] = newValue[key];
    return acc;
  });

  // todo: update collection indexes json
}

exec()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
