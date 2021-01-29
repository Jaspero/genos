const { build } = require('@elderjs/elderjs');
const admin = require('firebase-admin');

(async () => {

  admin.initializeApp({
    credential: admin.credential.cert(require('../key.json'))
  });

  await build();
})();
