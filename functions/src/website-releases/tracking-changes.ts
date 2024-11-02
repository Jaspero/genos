import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { REGION } from '../shared/consts/region.const';
import * as admin from 'firebase-admin';
import * as _ from 'lodash';
import { document, TRACKED_COLLECTIONS } from '../shared/consts/tracked-collection.const';
import { WEBSITE_URL } from './consts/website-url';

const functions: any = {};

for (const track of TRACKED_COLLECTIONS) {
  functions[track.collection] = onDocumentWritten(
    {
      region: REGION,
      document: `${track.collection}/{release}`
    },
    async (event) => {
      const fs = admin.firestore();
      const newValue = event.data?.after.exists
        ? { ...event.data.after.data(), id: event.data.after.id }
        : null;
      const oldValue = event.data?.before.exists
        ? { ...event.data.before.data(), id: event.data.before.id }
        : null;

      const statusDoc = await fs.collection('releases').doc('status').get();
      const status = statusDoc.exists ? (statusDoc.data() as { release: string }) : null;

      if (status && status.release) {
        const ref = fs.collection('releases').doc(status.release.toString());

        if (!event.data?.before.exists) {
          /**
           * New document
           */
          await ref.update({
            changes: admin.firestore.FieldValue.arrayUnion(
              document(track, newValue, newValue, WEBSITE_URL, 'create')
            )
          });
        } else if (!event.data?.after.exists) {
          /**
           * Deleted document
           */
          await ref.update({
            changes: admin.firestore.FieldValue.arrayUnion(
              document(track, null, oldValue, WEBSITE_URL, 'delete')
            )
          });
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
              // @ts-ignore
              (value: any, key: string | number) => oldValue && !_.isEqual(value, oldValue[key])
            ),
            /**
             * HC value for deleted fields
             */
            ..._.mapValues(deletedFields, () => 'deleted_property')
          };

          if (!_.isEmpty(allChanges)) {
            const documentData = document(track, allChanges, newValue, WEBSITE_URL, 'update');

            if (!_.isEmpty(documentData.data)) {
              await ref.update({
                changes: admin.firestore.FieldValue.arrayUnion(documentData)
              });
            }
          }
        }
      }
    }
  );
}

export const tracking = functions;
