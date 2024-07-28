import * as express from 'express';
import {asyncWrapper} from '../shared/utils/async-wrapper';
import {getFirestore} from 'firebase-admin/firestore';
import {firestore} from 'firebase-admin';
import {logger} from 'firebase-functions/v2';
import {REGION} from '../shared/consts/region.const';
import {onRequest} from 'firebase-functions/v2/https';

const app = express();

app.get(
  '/et',
  asyncWrapper(async (req: express.Request, res: express.Response) => {

    const fs = getFirestore();

    /**
     * d stands for destination
     */
    let {d, t} = req.query;

    d = decodeURIComponent(d as string)
      .replace(/&#x3D;/g, '=');

    if (t) {
      try {
        const emailRef = fs.collection('sent-emails').doc(t as string);
        const createdOn = Date.now();

        await Promise.all([
          emailRef.update({
            clicks: firestore.FieldValue.increment(1),
            lastClick: createdOn
          }),
          emailRef.collection('email-interactions').add({
            url: d,
            createdOn,
            type: 'click',
            headers: req.headers
          })
        ]);
      } catch (error: any) {
        logger.error(`Failed to store email click`, {destination: d, error});
      }
    }

    return d;
  }, 'redirect')
);

export const emailTracking = onRequest({
  region: REGION,
  maxInstances: 10
}, app);