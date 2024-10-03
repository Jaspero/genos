/**
 * Intended for updating release status from firestore
 */
const admin = require('firebase-admin');
const { writeFile, readFile } = require('fs/promises');

admin.initializeApp({
  credential: admin.credential.cert(require('./key.json'))
});

const job = process.argv[2];
const type = (process.argv[3] || '').trim();
let release = process.argv[4];

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

      /**
       * Collection indexes
       */
      if (!release) {
        release = doc?.data().release || 1;
      }

      /**
       * @type {{changes: {data: any; collection: string; id: string}[]}}
       */
      const releaseData = (
        await fs.doc(`releases/${release}`).get()
      )
        .data();

      /**
       * @type {{[collection: string]: {[id: string]: any}}}
       */
      const changes = releaseData.changes.reduce((acc, change) => {
        if (!acc[change.collection]) {
          acc[change.collection] = {};
        }

        acc[change.collection][change.id] = change.data;

        return acc;
      }, {});

      /**
       * Get json data
       */
      const keys = Object.keys(changes);
      /**
       * @type {Promise<{<{[key: string]: any}[]>[]>}
       */
      const collectionsJsonData = await Promise.all(
        keys.map(collection =>
          readFile('../public/web/data/' + collection + '.json')
            .then(data => JSON.parse(data.toString()))
            .catch(() => [])
        )
      );

      /**
       * Update json file
       * @type {<{[key: string]: any}[]>[]}
       */
      const updatedCollectionsJsonData = collectionsJsonData.map((collectionData, i) => {
        const collection = keys[i];
        const collectionChanges = changes[collection];

        return collectionData.reduce((acc, item) => {
          const id = item.id;
          const change = collectionChanges[id];

          /**
           * If change exists, update the item
           */
          if (change) {
            /**
             * If data exists, update the item
             * If data does not exist, item will be removed
             */
            if (change.data) {
              acc.push({
                ...item,
                ...change.data
              });
            }
          } else {
            /**
             * If change does not exist, keep the item
             */
            acc.push(item);
          }

          return acc;
        }, []);
      });

      /**
       * Write the updated json data
       */
      await Promise.all(
        keys.map((collection, i) =>
          writeFile(
            '../public/web/data/' + collection + '.json',
            JSON.stringify(updatedCollectionsJsonData[i])
          )
        )
      );
      /**
       * End collection indexes
       */

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
