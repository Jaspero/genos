/**
 * Intended for updating release status from firestore
 */
const admin = require('firebase-admin');
const { writeFile, readFile } = require('fs/promises');

admin.initializeApp({
  credential: admin.credential.cert(require('./key.json'))
});

let release = process.argv[2];

async function exec() {
  const fs = admin.firestore();

  if (!release) {
    const releaseStatus = (
      await fs.doc('releases/status').get()
    )
      .data();

    release = releaseStatus.release;
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
}

exec()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
