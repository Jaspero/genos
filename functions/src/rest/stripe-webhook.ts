import * as express from 'express';
import { logger } from 'firebase-functions';
import { onRequest } from 'firebase-functions/v2/https';
import { constants } from 'http2';
import { REGION } from '../shared/consts/region.const';
import { stripeInstance } from '../shared/consts/stripeInstance.const';

const app = express();

app.post('/webhook', (req, res) => {
  async function exec() {
    const sig = req.headers['stripe-signature'] as string;

    let event = null;
    try {
      event = stripeInstance.webhooks.constructEvent(
        (req as any).rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      // invalid signature

      logger.error('Error: ', err);
      res.status(constants.HTTP_STATUS_BAD_REQUEST).end();
      return;
    }

    const { object }: any = event.data;

    logger.log(object);

    switch (event.type) {
      case 'invoice.paid':
        break;
      case 'invoice.voided':
      case 'invoice.payment_failed':
        break;
    }
  }

  exec()
    .then(() => res.sendStatus(constants.HTTP_STATUS_OK))
    .catch(() => res.sendStatus(constants.HTTP_STATUS_OK));
});

export const stripeWebhook = onRequest(
  {
    region: REGION,
    maxInstances: 10,
    secrets: ['STRIPE_WEBHOOK_SECRET', 'STRIPE_SECRET_KEY']
  },
  app
);
