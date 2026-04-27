import { Resend } from 'resend';

export const RESEND_FROM = 'Genos <no-reply@jaspero.co>';

let client: Resend | null = null;

function getClient(): Resend {
  if (!client) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    client = new Resend(key);
  }
  return client;
}

export interface ResendSendOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  from?: string;
}

export async function sendResendEmail(options: ResendSendOptions) {
  const c = getClient();
  return c.emails.send({
    from: options.from ?? RESEND_FROM,
    to: Array.isArray(options.to) ? options.to : [options.to],
    subject: options.subject,
    html: options.html,
    ...(options.replyTo ? { replyTo: options.replyTo } : {})
  });
}
