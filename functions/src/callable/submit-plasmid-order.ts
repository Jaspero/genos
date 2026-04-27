import { onCall, HttpsError } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { REGION } from '../shared/consts/region.const';
import { isAuthenticated } from '../shared/utils/authenticate';
import { sendResendEmail } from '../shared/services/email/resend.service';

interface IncomingGRNA {
  type?: string;
  name?: string;
  sequence?: string;
  target?: string;
}

interface IncomingConfiguration {
  backbone?: string;
  backboneSizeBp?: number;
  gRNAs?: IncomingGRNA[];
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
}

interface IncomingPayload {
  configurations?: IncomingConfiguration[];
  notes?: string;
  language?: 'en' | 'hr';
}

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

function configHtml(cfg: IncomingConfiguration, idx: number): string {
  const gRNA = (cfg.gRNAs ?? [])
    .map(
      (g, i) =>
        `<li>${esc(g.type)}${g.name ? ` — <b>${esc(g.name)}</b>` : ''}${
          g.sequence ? ` — seq: ${esc(g.sequence)}` : ''
        }${g.target ? ` — target: ${esc(g.target)}` : ''}</li>`
    )
    .join('');
  const fluor = (cfg.markersFluorescent ?? []).map(esc).join(', ') || '—';
  const abx = (cfg.markersAntibiotic ?? []).map(esc).join(', ') || '—';
  return `
    <h3 style="margin:24px 0 8px;font-family:sans-serif;">Configuration #${idx + 1}</h3>
    <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;font-family:sans-serif;font-size:13px;border:1px solid #ddd;">
      <tr><td><b>Backbone</b></td><td>${esc(cfg.backbone)} (${cfg.backboneSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>gRNAs</b></td><td>${cfg.gRNAs?.length ?? 0} total (${cfg.gRNAsSizeBp ?? 0} bp)<ul>${gRNA}</ul></td></tr>
      <tr><td><b>Promoter</b></td><td>${esc(cfg.promoter)} (${cfg.promoterSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>Effector domain</b></td><td>${esc(cfg.ed)} (${cfg.edSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>dCas9</b></td><td>${esc(cfg.dcas)} (${cfg.dcasSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>Markers (fluor)</b></td><td>${fluor}</td></tr>
      <tr><td><b>Markers (abx)</b></td><td>${abx}</td></tr>
      <tr><td><b>Terminator</b></td><td>${esc(cfg.terminator)} (${cfg.terminatorSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>Total size</b></td><td>${cfg.totalSizeBp ?? 0} bp</td></tr>
    </table>
  `;
}

function validate(payload: IncomingPayload): void {
  if (!payload || !Array.isArray(payload.configurations) || payload.configurations.length === 0) {
    throw new HttpsError('invalid-argument', 'At least one configuration is required');
  }
  if (payload.configurations.length > 50) {
    throw new HttpsError('invalid-argument', 'Too many configurations');
  }
  payload.configurations.forEach((cfg, i) => {
    const required: Array<[keyof IncomingConfiguration, string]> = [
      ['backbone', 'backbone'],
      ['promoter', 'promoter'],
      ['ed', 'effector domain'],
      ['dcas', 'dCas9'],
      ['terminator', 'terminator']
    ];
    for (const [field, label] of required) {
      if (!cfg[field] || typeof cfg[field] !== 'string') {
        throw new HttpsError('invalid-argument', `Configuration #${i + 1}: ${label} is required`);
      }
    }
    if (!Array.isArray(cfg.gRNAs) || cfg.gRNAs.length === 0) {
      throw new HttpsError('invalid-argument', `Configuration #${i + 1}: at least one gRNA is required`);
    }
  });
}

export const submitPlasmidOrder = onCall(
  { maxInstances: 5, region: REGION, secrets: ['RESEND_API_KEY'] },
  async (request) => {
    isAuthenticated(request);
    const uid = request.auth!.uid;
    const payload = (request.data ?? {}) as IncomingPayload;

    validate(payload);

    const fs = admin.firestore();

    let customerEmail = request.auth!.token.email ?? '';
    let customerName = (request.auth!.token.name as string) ?? '';
    try {
      const customerSnap = await fs.collection('customers').doc(uid).get();
      const cd = customerSnap.data() as { email?: string; firstName?: string; lastName?: string; name?: string } | undefined;
      if (cd) {
        customerEmail = cd.email || customerEmail;
        const composed = [cd.firstName, cd.lastName].filter(Boolean).join(' ').trim();
        customerName = composed || cd.name || customerName;
      }
    } catch {
      // ignore
    }

    if (!customerEmail) {
      throw new HttpsError('failed-precondition', 'No email on customer profile');
    }

    const configurations = payload.configurations!.map((cfg) => ({
      backbone: cfg.backbone ?? '',
      backboneSizeBp: Number(cfg.backboneSizeBp) || 0,
      gRNAs: (cfg.gRNAs ?? []).map((g) => ({
        type: g.type ?? '',
        name: g.name ?? '',
        sequence: g.sequence ?? '',
        target: g.target ?? ''
      })),
      gRNAsSizeBp: Number(cfg.gRNAsSizeBp) || 0,
      promoter: cfg.promoter ?? '',
      promoterSizeBp: Number(cfg.promoterSizeBp) || 0,
      ed: cfg.ed ?? '',
      edSizeBp: Number(cfg.edSizeBp) || 0,
      dcas: cfg.dcas ?? '',
      dcasSizeBp: Number(cfg.dcasSizeBp) || 0,
      markersFluorescent: Array.isArray(cfg.markersFluorescent) ? cfg.markersFluorescent.map(String) : [],
      markersAntibiotic: Array.isArray(cfg.markersAntibiotic) ? cfg.markersAntibiotic.map(String) : [],
      markersSizeBp: Number(cfg.markersSizeBp) || 0,
      terminator: cfg.terminator ?? '',
      terminatorSizeBp: Number(cfg.terminatorSizeBp) || 0,
      totalSizeBp: Number(cfg.totalSizeBp) || 0
    }));

    const now = admin.firestore.FieldValue.serverTimestamp();
    const orderRef = fs.collection('plasmid-orders').doc();

    await orderRef.set({
      customerId: uid,
      customerEmail,
      customerName,
      configurations,
      notes: typeof payload.notes === 'string' ? payload.notes.slice(0, 4000) : '',
      language: payload.language === 'hr' ? 'hr' : 'en',
      status: 'pending-confirmation',
      createdAt: now,
      updatedAt: now
    });

    const adminRecipients = ['gjosipovic@genos.hr'];

    if (adminRecipients.length) {
      const html = `
        <div style="font-family:sans-serif;max-width:720px;margin:0 auto;">
          <h2>New plasmid order</h2>
          <p><b>Customer:</b> ${esc(customerName || '—')} &lt;${esc(customerEmail)}&gt;</p>
          <p><b>Order ID:</b> ${esc(orderRef.id)}</p>
          <p><b>Configurations:</b> ${configurations.length}</p>
          ${payload.notes ? `<p><b>Notes:</b><br>${esc(payload.notes).replace(/\n/g, '<br>')}</p>` : ''}
          ${configurations.map((c, i) => configHtml(c, i)).join('')}
        </div>
      `;
      try {
        await sendResendEmail({
          to: adminRecipients,
          subject: `New plasmid order — ${customerEmail}`,
          html,
          replyTo: customerEmail
        });
      } catch (err) {
        console.error('Failed to send admin notification email', err);
      }
    } else {
      console.warn('No admin recipients configured for plasmid order notifications');
    }

    return { orderId: orderRef.id };
  }
);
