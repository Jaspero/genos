import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { REGION } from '../shared/consts/region.const';
import * as admin from 'firebase-admin';
import { WEBSITE_URL } from './consts/website-url';
import * as _ from 'lodash';
import { TRACKED_COLLECTIONS } from '../shared/consts/tracked-collection.const';

const functions: any = {};

/**
 * Creates a document object that will be stored in the release history
 */
const document = (item: any, id: string, data: any): { name: string; url: string; updatedAt: string; data: { [key: string]: any }, collection: string, id: string } => ({
  data: item.keysToTrack.reduce((acc: any, key: string) => {
    let shortKey = key[0];
    let count = 1;

    while (acc.hasOwnProperty(shortKey)) {
      shortKey = key[0] + count;
      count++;
    }

    if (data[key] !== undefined) {
      acc[shortKey] = data[key];
    }

    return acc;
  }, {}),
  collection: item.collection,
  name: data[item.titleKey],
  url: WEBSITE_URL + item.prefix + '/' + data[item.urlKey],
  updatedAt: new Date().toISOString(),
  id
});

for (const track of TRACKED_COLLECTIONS) {
  functions[track.collection] = onDocumentWritten(
    {
      region: REGION,
      document: `${track.collection}/{release}`,
    },
    async (event) => {
      const fs = admin.firestore();
      const newValue = event.data?.after.exists ? event.data?.after.data() : null;
      const oldValue = event.data?.before.exists ? event.data?.before.data() : null;

      const statusDoc = await fs.collection('releases').doc('status').get();
      const status = statusDoc.exists ? (statusDoc.data() as { release: string }) : null;

      if (status && status.release) {
        const ref = fs.collection('releases').doc(status.release.toString());

        if (!event.data?.before.exists) {
          /**
           * New document
           */
          await ref.update({changes: admin.firestore.FieldValue.arrayUnion(document(track, event.data?.after.id as string, newValue))});
        } else if (!event.data?.after.exists) {
          /**
           * Deleted document
           */
          await ref.update({changes: admin.firestore.FieldValue.arrayUnion(document(track, event.data?.before.id, null))});
        } else {
          /**
           * Updated document
           */
          const deletedFields = _.pickBy(
            oldValue,
            (value: any, key: string | number) => newValue && !(key in newValue)
          );

          const allChanges = {
            ..._.pickBy(
              newValue,
              (value: any, key: string | number) => oldValue && !_.isEqual(value, oldValue[key])
            ),
            /**
             * HC value for deleted fields
             */
            ..._.mapValues(deletedFields, () => 'deleted_property')
          };

          if (!_.isEmpty(allChanges)) {
            await ref.update({
              changes: admin.firestore.FieldValue.arrayUnion(document(track, event.data?.after.id as string, allChanges))
            });
          }
        }
      }
    }
  );
}

export const tracking = functions;
