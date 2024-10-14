import * as sgMail from '@sendgrid/mail';
import { firestore } from 'firebase-admin';
import { compile } from 'handlebars';
import { random } from '@jaspero/utils';
import { logger } from 'firebase-functions/v2';
import { EMAIL_CONFIG } from './email-config.const';
import { EmailTemplate } from './email-template.interface';

/**
 * SendGrid docs
 * https://sendgrid.com/docs/api-reference/
 */

export class EmailService {
  token: string | undefined;

  constructor() {
    if (process.env.SENDGRID_API_KEY) {
      this.token = process.env.SENDGRID_API_KEY;
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
  }

  async parseEmail(
    templateId: string,
    context?: any,
    receiver?: string | string[],
    additional?: any,
    source?: string,
    tracking = true,
    clickTracking = true
  ) {
    const fs = firestore();
    const id = `sm-${random.string(32)}`;
    const messageSnap = await fs.doc(`email-templates/${templateId}`).get();
    const message: EmailTemplate = messageSnap.data() as any;

    if (!message?.active) {
      logger.log("Email doesn't exist or is not active", templateId);
      return;
    }

    const [htmlDoc, cssDoc] = await Promise.all([
      messageSnap.ref.collection('content').doc('html').get(),
      messageSnap.ref.collection('content').doc('css').get()
    ]);

    const style = cssDoc.data()!.content || '';

    let content = htmlDoc.data()!.content || '';

    if (tracking) {
      content = content.replace('/email/images/logo.png', `/email/images/logo.png?t=${id}`);
    }

    const template = compile(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap" rel="stylesheet">
          <title>${message.subject}</title>${style ? `<style>${style}</style>` : ''}
        </head>
        <body style="background: #F1F5F3; padding: 16px;">${content}</body></html>`
    );

    let html = template({ ...context, global }).replace(/&amp;/g, '&');

    if (clickTracking) {
      const matcher = /href="(.*?)"/g;
      const matches = html.matchAll(matcher);

      for (const match of matches) {
        if (match[0] === '\'href=""\'' || match[1].includes('mailto')) {
          continue;
        }

        const baseUrl = EMAIL_CONFIG.trackingUrl;
        html = html.replace(
          match[0],
          `href="${baseUrl}?t=${id}&d=${encodeURIComponent(match[1])}"`
        );
      }
    }

    const to = receiver ? receiver : EMAIL_CONFIG.adminEmail;
    const subject = compile(message.subject)({ ...context, global });

    const res = await this.sendEmail({ to, subject, html, ...additional });

    /**
     * Cleanup context for inserts always work
     */
    context = context || {};

    for (const key in context) {
      if (context[key] === undefined || context[key] === null) {
        context[key] = '';
      }
    }

    try {
      await firestore()
        .collection('sent-emails')
        .doc(id)
        .set({
          createdOn: new Date().toUTCString(),
          to,
          html,
          subject,
          templateId,
          ...(res === true ? { status: true } : { status: false, error: res }),
          ...(source && { source }),
          context
        });
    } catch (e) {
      logger.error('Failed to insert record of sent-email', e);
    }
  }

  async sendEmail(data: any) {
    if (!data.to) {
      logger.error('No receiving email provided.', data);
      return 'No receiver email provided.';
    }

    try {
      await (sgMail.send as any)({
        from: EMAIL_CONFIG.fromEmail,
        ...data,
        reply_to: data.reply_to || EMAIL_CONFIG.fromEmail,
        tracking_settings: {
          click_tracking: {
            enable: false
          }
        }
      });
    } catch (e: any) {
      logger.error('Failed sending email', e.toString());
      return e.toString();
    }

    return true;
  }
}
