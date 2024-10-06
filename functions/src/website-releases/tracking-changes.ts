import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { REGION } from '../shared/consts/region.const';
import { TRACKED_COLLECTIONS } from './consts/tracked-collections';

const functions: any = {};

for (const item of TRACKED_COLLECTIONS) {
  functions[item.collection] = onDocumentWritten(
    {
      region: REGION,
      document: `${item.collection}/{release}`
    },
    async (event) => {}
  );
}

export const tracking = functions;
