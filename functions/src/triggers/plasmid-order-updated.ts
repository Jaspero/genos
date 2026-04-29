import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';
import { sendResendEmail } from '../shared/services/email/resend.service';

const ESC_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
function esc(value: unknown): string {
  return String(value ?? '').replace(/[&<>"']/g, (m) => ESC_MAP[m]);
}

const SIZE_BP: Record<string, number> = {
  'Standard Backbone': 2013, 'Lentiviral backbone': 7528,
  'PiggyBac compatible backbone': 3187, 'Sleeping Beauty compatible backbone': 3174,
  'Secondary backbone - Puro': 3147, 'Secondary backbone - mClover3': 3264,
  'SaCas9-gRNA': 390, 'SpCas9-gRNA': 390,
  CbH: 848, SV40: 369, EF1a: 1204, EFS: 281,
  DNMT3A: 1001, TET1: 2219, VPR: 1643, KRAB: 275,
  p300: 1958, HDAC3: 1334, LSD1: 2609, KDM5A: 2447,
  RIOX1: 1973, PRDM9: 965, G9a: 1181, 'G9a-me3': 1181,
  dSpCas9: 4290, dSaCas9: 3276,
  mRuby3: 809, mClover3: 815, mCerulean3: 810,
  'Puromycin resistance': 676, 'Hygromycin resistance': 1105,
  'Blasticidin resistance': 472,
  'BGH terminator': 213, 'SV40 terminator': 151
};

function baseED(label: string): string {
  if (!label) return '';
  if (label === 'Custom') return 'Custom';
  return label.split(' ')[0];
}

function normalizeLabel(label: unknown): string {
  return String(label ?? '')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function sizeOf(label: unknown): number {
  const normalized = normalizeLabel(label);
  const withoutDetails = normalizeLabel(normalized.replace(/\s*\(.+\)$/, ''));
  return SIZE_BP[normalized] || SIZE_BP[withoutDetails] || SIZE_BP[baseED(withoutDetails)] || 0;
}

function displaySize(stored: unknown, label: unknown): number {
  return Number(stored) || sizeOf(label);
}

function sizedList(items: string[]): string {
  if (!items.length) {
    return '—';
  }

  return items.map((item) => `${esc(item)} (${sizeOf(item)} bp)`).join(', ');
}

interface PlasmidOrderDoc {
  customerEmail: string;
  customerName?: string;
  status: string;
  priceEur?: number;
  priceNotes?: string;
  language?: 'en' | 'hr';
  configurations?: Array<{
    backbone?: string;
    backboneSizeBp?: number;
    gRNAs?: Array<{ type?: string; name?: string; sequence?: string; target?: string }>;
    gRNAsSizeBp?: number;
    promoter?: string;
    promoterSizeBp?: number;
    ed?: string;
    edSizeBp?: number;
    dcas?: string;
    dcasSizeBp?: number;
    markersFluorescent?: string[];
    markersAntibiotic?: string[];
    markersSizeBp?: number;
    terminator?: string;
    terminatorSizeBp?: number;
    totalSizeBp?: number;
  }>;
  confirmationEmailSentAt?: unknown;
  invoiceEmailSentAt?: unknown;
  paidEmailSentAt?: unknown;
}

function configSummaryHtml(cfg: NonNullable<PlasmidOrderDoc['configurations']>[number], idx: number, lang: 'en' | 'hr'): string {
  const t = (en: string, hr: string) => (lang === 'hr' ? hr : en);
  const gRNAsSizeBp = Number(cfg.gRNAsSizeBp) || (cfg.gRNAs ?? []).reduce((sum, g) => sum + sizeOf(g.type), 0);
  const markersSizeBp = Number(cfg.markersSizeBp) || [...(cfg.markersFluorescent ?? []), ...(cfg.markersAntibiotic ?? [])].reduce((sum, marker) => sum + sizeOf(marker), 0);
  const totalSizeBp = Number(cfg.totalSizeBp) ||
    displaySize(cfg.backboneSizeBp, cfg.backbone) +
    gRNAsSizeBp +
    displaySize(cfg.promoterSizeBp, cfg.promoter) +
    displaySize(cfg.edSizeBp, cfg.ed) +
    displaySize(cfg.dcasSizeBp, cfg.dcas) +
    markersSizeBp +
    displaySize(cfg.terminatorSizeBp, cfg.terminator);
  const gRNA = (cfg.gRNAs ?? [])
    .map(
      (g) =>
        `<li>${esc(g.type)}${g.name ? ` — <b>${esc(g.name)}</b>` : ''}${
          g.sequence ? ` — ${t('seq', 'sek')}: ${esc(g.sequence)}` : ''
        }${g.target ? ` — ${t('target', 'cilj')}: ${esc(g.target)}` : ''} (${sizeOf(g.type)} bp)</li>`
    )
    .join('');
  const fluor = sizedList(cfg.markersFluorescent ?? []);
  const abx = sizedList(cfg.markersAntibiotic ?? []);
  return `
    <h3 style="margin:20px 0 8px;font-family:sans-serif;">${t('Configuration', 'Konfiguracija')} #${idx + 1}</h3>
    <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;font-family:sans-serif;font-size:13px;border:1px solid #ddd;">
      <tr><td><b>${t('Backbone', 'Okosnica')}</b></td><td>${esc(cfg.backbone)} (${displaySize(cfg.backboneSizeBp, cfg.backbone)} bp)</td></tr>
      <tr><td><b>gRNAs</b></td><td>${cfg.gRNAs?.length ?? 0} (${gRNAsSizeBp} bp)<ul>${gRNA}</ul></td></tr>
      <tr><td><b>${t('Promoter', 'Promotor')}</b></td><td>${esc(cfg.promoter)} (${displaySize(cfg.promoterSizeBp, cfg.promoter)} bp)</td></tr>
      <tr><td><b>${t('Effector domain', 'Efektorska domena')}</b></td><td>${esc(cfg.ed)} (${displaySize(cfg.edSizeBp, cfg.ed)} bp)</td></tr>
      <tr><td><b>dCas9</b></td><td>${esc(cfg.dcas)} (${displaySize(cfg.dcasSizeBp, cfg.dcas)} bp)</td></tr>
      <tr><td><b>${t('Markers (fluor)', 'Markeri (fluor)')}</b></td><td>${fluor}</td></tr>
      <tr><td><b>${t('Markers (abx)', 'Markeri (abx)')}</b></td><td>${abx}</td></tr>
      <tr><td><b>${t('Markers total', 'Markeri ukupno')}</b></td><td>${markersSizeBp} bp</td></tr>
      <tr><td><b>${t('Terminator', 'Terminator')}</b></td><td>${esc(cfg.terminator)} (${displaySize(cfg.terminatorSizeBp, cfg.terminator)} bp)</td></tr>
      <tr><td><b>${t('Total size', 'Ukupna veličina')}</b></td><td>${totalSizeBp} bp</td></tr>
    </table>
  `;
}

function bankInstructionsHtml(lang: 'en' | 'hr'): string {
  const recipient = 'Genos D.O.O.';
  const iban = 'HR0523600001101951902';
  const bic = 'ZABAHR2X';
  const t = (en: string, hr: string) => (lang === 'hr' ? hr : en);
  return `
    <h3 style="margin:24px 0 8px;font-family:sans-serif;">${t('Payment instructions', 'Upute za plaćanje')}</h3>
    <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;font-family:sans-serif;font-size:13px;border:1px solid #ddd;">
      <tr><td><b>${t('Recipient', 'Primatelj')}</b></td><td>${esc(recipient)}</td></tr>
      <tr><td><b>IBAN</b></td><td>${esc(iban)}</td></tr>
      ${bic ? `<tr><td><b>BIC/SWIFT</b></td><td>${esc(bic)}</td></tr>` : ''}
    </table>
  `;
}

function buildInvoiceEmail(orderId: string, data: PlasmidOrderDoc): { subject: string; html: string } {
  const lang: 'en' | 'hr' = data.language === 'hr' ? 'hr' : 'en';
  const t = (en: string, hr: string) => (lang === 'hr' ? hr : en);
  const price = typeof data.priceEur === 'number' ? `${data.priceEur.toFixed(2)} €` : '—';
  const subject = t(
    `Plasmid order confirmed — invoice (#${orderId.slice(0, 8)})`,
    `Plazmid narudžba potvrđena — račun (#${orderId.slice(0, 8)})`
  );
  const configs = (data.configurations ?? []).map((c, i) => configSummaryHtml(c, i, lang)).join('');
  const html = `
    <div style="font-family:sans-serif;max-width:720px;margin:0 auto;color:#0b1220;">
      <h2>${t('Your plasmid order has been confirmed', 'Vaša plazmid narudžba je potvrđena')}</h2>
      <p>${t('Hello', 'Pozdrav')} ${esc(data.customerName || '')},</p>
      <p>${t(
        'Thank you for your order. Below you will find the order details and payment instructions.',
        'Hvala na narudžbi. U nastavku se nalaze detalji narudžbe i upute za plaćanje.'
      )}</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;font-family:sans-serif;font-size:13px;border:1px solid #ddd;">
        <tr><td><b>${t('Order ID', 'ID narudžbe')}</b></td><td>${esc(orderId)}</td></tr>
        <tr><td><b>${t('Total price', 'Ukupna cijena')}</b></td><td>${esc(price)}</td></tr>
        ${data.priceNotes ? `<tr><td><b>${t('Notes', 'Napomena')}</b></td><td>${esc(data.priceNotes)}</td></tr>` : ''}
      </table>
      ${bankInstructionsHtml(lang)}
      <h3 style="margin:24px 0 8px;font-family:sans-serif;">${t('Order details', 'Detalji narudžbe')}</h3>
      ${configs}
      <p style="margin-top:24px;color:#666;font-size:12px;">${t(
        'Please use the Order ID as the payment reference.',
        'Molimo koristite ID narudžbe kao poziv na broj prilikom plaćanja.'
      )}</p>
    </div>
  `;
  return { subject, html };
}

function buildPaidEmail(orderId: string, data: PlasmidOrderDoc): { subject: string; html: string } {
  const lang: 'en' | 'hr' = data.language === 'hr' ? 'hr' : 'en';
  const t = (en: string, hr: string) => (lang === 'hr' ? hr : en);
  const subject = t(
    `Payment received — plasmid order #${orderId.slice(0, 8)}`,
    `Plaćanje zaprimljeno — plazmid narudžba #${orderId.slice(0, 8)}`
  );
  const html = `
    <div style="font-family:sans-serif;max-width:720px;margin:0 auto;color:#0b1220;">
      <h2>${t('Payment received', 'Plaćanje je zaprimljeno')}</h2>
      <p>${t('Hello', 'Pozdrav')} ${esc(data.customerName || '')},</p>
      <p>${t(
        'We have received your payment. Your plasmid order is now in production.',
        'Zaprimili smo vašu uplatu. Vaša plazmid narudžba je sada u izradi.'
      )}</p>
      <p><b>${t('Order ID', 'ID narudžbe')}:</b> ${esc(orderId)}</p>
    </div>
  `;
  return { subject, html };
}

export const onPlasmidOrderUpdated = onDocumentUpdated(
  {
    document: 'plasmid-orders/{orderId}',
    region: 'europe-west1',
    secrets: ['RESEND_API_KEY']
  },
  async (event) => {
    const before = event.data?.before.data() as PlasmidOrderDoc | undefined;
    const after = event.data?.after.data() as PlasmidOrderDoc | undefined;
    if (!before || !after) return;

    const orderId = event.params.orderId;
    const fs = admin.firestore();
    const ref = fs.collection('plasmid-orders').doc(orderId);

    if (
      before.status !== 'confirmed' &&
      after.status === 'confirmed' &&
      !after.invoiceEmailSentAt
    ) {
      if (!after.customerEmail) {
        console.warn(`Order ${orderId} has no customerEmail`);
        return;
      }
      const { subject, html } = buildInvoiceEmail(orderId, after);
      try {
        await sendResendEmail({ to: after.customerEmail, subject, html });
        await ref.update({
          confirmedAt: admin.firestore.FieldValue.serverTimestamp(),
          confirmationEmailSentAt: admin.firestore.FieldValue.serverTimestamp(),
          invoiceEmailSentAt: admin.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error(`Failed to send invoice email for ${orderId}`, err);
      }
      return;
    }

    if (
      before.status !== 'paid' &&
      after.status === 'paid' &&
      !after.paidEmailSentAt
    ) {
      if (!after.customerEmail) return;
      const { subject, html } = buildPaidEmail(orderId, after);
      try {
        await sendResendEmail({ to: after.customerEmail, subject, html });
        await ref.update({
          paidAt: admin.firestore.FieldValue.serverTimestamp(),
          paidEmailSentAt: admin.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error(`Failed to send paid email for ${orderId}`, err);
      }
    }
  }
);
