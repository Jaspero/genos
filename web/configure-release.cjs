/**
 * Intended for updating release status from firestore
 */
const admin = require('firebase-admin');
const { writeFile } = require('fs/promises');

admin.initializeApp({
  credential: admin.credential.cert(require('./key.json'))
});

const job = process.argv[2];
const type = (process.argv[3] || '').trim();

let release = process.argv[3];

async function exec() {
  const fs = admin.firestore();

  switch (job) {
    case 'start': {
      let vr = 1;
      let changesConfigured = false;

      const doc = await fs.doc('releases/status').get();

      if (doc.exists) {
        const version = doc.data().release;

        if (version) {
          vr = version;

          if (type === 'partial') {
            const changesDoc = await fs.doc(`releases/${version}`).get();
            const changes = changesDoc?.data()?.changes || [];

            if (changes.length) {
              await writeFile(
                'build-config.json',
                JSON.stringify({
                  clearBuild: false,
                  pages: changes.map((c) => c.page)
                })
              );
              changesConfigured = true;
            }
          }
        }
      }

      if (!changesConfigured) {
        await writeFile(
          'build-config.json',
          JSON.stringify({
            clearBuild: true,
            pages: ['/sitemap-hidden']
          })
        );
      }

      console.log(vr);
      break;
    }
    case 'finish': {
      release = parseInt(release, 10);

      const date = new Date().toISOString();

      await Promise.all([
        fs.doc('releases/status').set(
          {
            lastPublished: date,
            release: release + 1
          },
          { merge: true }
        ),
        fs.doc(`releases/${release}`).set(
          {
            status: 'released',
            releasedOn: date
          },
          { merge: true }
        ),
        fs.doc(`releases/${release + 1}`).set({
          release: release + 1,
          createdOn: date,
          status: 'pending',
          changes: []
        })
      ]);
      break;
    }
  }
}

exec()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
