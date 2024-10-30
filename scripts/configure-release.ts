/**
 * Intended for updating release status from firestore
 */
import admin from 'firebase-admin';
import { document, TRACKED_COLLECTIONS } from '../shared/consts/tracked-collection.const';
import { writeFile, readFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
// @ts-ignore
import credential from '../web/key.json';
import { CONFIG } from '../web/src/lib/consts/config.const';
import { DateTime } from 'luxon';

admin.initializeApp({
  credential: admin.credential.cert(credential)
});

const job = process.env.JOB;
const type = (process.env.VERSION || '').trim();
let release = process.env.RELEASE;

async function exec() {
  const fs = admin.firestore();

  switch (job) {
    case 'start': {
      let vr = 1;
      let changesConfigured = false;

      const doc = await fs.doc('releases/status').get();

      if (doc.exists) {
        const version = doc.data()?.release;

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
                  pages: changes.map((c: any) => c.page)
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

      /**
       * Collection indexes
       */
      if (!release) {
        release = doc?.data()?.release || 1;
      }

      /**
       * @type {{changes: {data: any; collection: string; id: string}[]}}
       */
      const releaseData = (await fs.doc(`releases/${release.toString()}`).get()).data() as any;

      /**
       * @type {{[collection: string]: {[id: string]: any}}}
       */
      const changes = (releaseData?.changes || []).reduce((acc: any, change: any) => {
        if (change.skipGenerateJsonFile) {
          return acc;
        }

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
        keys.map((collection) =>
          readFile('./public/web/' + collection + '.json')
            .then((data) => JSON.parse(data.toString()))
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

        return collectionData.reduce((acc: any, item: any) => {
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
              const dataToPush = {
                ...item,
                ...change.data
              };

              /**
               * If any property from change.data object has value 'deleted_key' we need to delete the key from the item
               */
              if (Object.values(change.data).some((v) => v === 'deleted_key')) {
                Object.keys(change.data).forEach((key) => {
                  if (change.data[key] === 'deleted_key') {
                    delete dataToPush[key];
                  }
                });
              }

              acc.push(dataToPush);
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
       * Create dir if not exists
       */
      if (!existsSync('./public/web/data')) {
        mkdirSync('./public/web/data');
      }
      /**
       * Write the updated json data
       */
      await Promise.all(
        keys.map((collection, i) =>
          writeFile(
            './public/web/data/' + collection + '.json',
            JSON.stringify(updatedCollectionsJsonData[i])
          )
        )
      );

      /**
       * Create first json file if it does not exist
       */
      for (const data of TRACKED_COLLECTIONS) {
        if (data.skipGenerateJsonFile) {
          continue;
        }

        if (!existsSync('./public/web/data/' + data.collection + '.json')) {
          const collectionData = await fs.collection(data.collection).get();

          const dataset = {
            ...doc.data(),
            id: doc.id
          };

          await writeFile(
            './public/web/data/' + data.collection + '.json',
            JSON.stringify(
              collectionData.docs.map((doc) => {
                const d = doc.data();
                d.id = doc.id;
                return document(data, dataset, dataset, CONFIG.websiteUrl);
              })
            )
          );
        }
      }
      /**
       * End collection indexes
       */

      break;
    }
    case 'finish': {
      const doc = await fs.doc('releases/status').get();
      release = parseInt(release, 10) || (doc.exists ? doc?.data()?.release : 0);

      const date = DateTime.now().toUTC().toISO();

      await Promise.all([
        fs.doc('releases/status').set(
          {
            lastPublished: date,
            release: release + 1
          },
          { merge: true }
        ),
        fs.doc(`releases/${release.toString()}`).set(
          {
            status: 'released',
            releasedOn: date
          },
          { merge: true }
        ),
        fs.doc(`releases/${(release + 1).toString()}`).set({
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
