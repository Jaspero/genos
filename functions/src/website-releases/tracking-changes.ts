import {onDocumentWritten} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {TRACKED_COLLECTIONS} from './consts/tracked-collections';
import * as admin from 'firebase-admin';

const functions: any = {};

const document = (item: any, id: string,  data: any) => ({
  data: item.keysToTrack.reduce((acc: any, key) => {
    let shortKey = key[0];
    let count = 1;

    while (acc.hasOwnProperty(shortKey)) {
      shortKey = key[0] + count;
      count++;
    }

    acc[shortKey] = data[key];
    return acc;
  }, {}),
  collection: item.collection,
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
      const status: {release: string} = await fs.collection('releases').doc('status').get().then((doc) => doc.data()) as {release: string};

      if (status) {
        const ref = fs.collection('releases').doc(status.release);
        if (!event.data?.before.exists) {
          await ref.update({changes: admin.firestore.FieldValue.arrayUnion(document(track, event.data?.after.id as string, newValue))});
        } else if (!event.data?.after.exists) {
          await ref.update({changes: admin.firestore.FieldValue.arrayUnion(document(track, event.data?.before.id, null))});
        } else {
          await ref.update({changes: admin.firestore.FieldValue.arrayUnion(document(track,event.data?.after.id, newValue))});
        }
      }
    }
  );
  
}

export const tracking = functions;
