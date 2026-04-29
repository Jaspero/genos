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

interface CustomerProfileSnapshot {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  institution: string;
  position: string;
  institutionAddress: string;
}

const SIZE_BP: Record<string, number> = {
  'Standard Backbone': 2013,
  'Lentiviral backbone': 7528,
  'PiggyBac compatible backbone': 3187,
  'Sleeping Beauty compatible backbone': 3174,
  'Secondary backbone - Puro': 3147,
  'Secondary backbone - mClover3': 3264,
  'SaCas9-gRNA': 390,
  'SpCas9-gRNA': 390,
  CbH: 848,
  SV40: 369,
  EF1a: 1204,
  EFS: 281,
  DNMT3A: 1001,
  TET1: 2219,
  VPR: 1643,
  KRAB: 275,
  p300: 1958,
  HDAC3: 1334,
  LSD1: 2609,
  KDM5A: 2447,
  RIOX1: 1973,
  PRDM9: 965,
  G9a: 1181,
  'G9a-me3': 1181,
  dSpCas9: 4290,
  dSaCas9: 3276,
  mRuby3: 809,
  mClover3: 815,
  mCerulean3: 810,
  'Puromycin resistance': 676,
  'Hygromycin resistance': 1105,
  'Blasticidin resistance': 472,
  'BGH terminator': 213,
  'SV40 terminator': 151
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

function sizeOrFallback(sentSize: unknown, label: unknown): number {
  return sizeOf(label) || Number(sentSize) || 0;
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

function sizedList(items: string[]): string {
  if (!items.length) {
    return '—';
  }

  return items.map((item) => `${esc(item)} (${sizeOf(item)} bp)`).join(', ');
}

function configHtml(cfg: IncomingConfiguration, idx: number): string {
  const gRNA = (cfg.gRNAs ?? [])
    .map(
      (g, i) =>
        `<li>${esc(g.type)}${g.name ? ` — <b>${esc(g.name)}</b>` : ''}${
          g.sequence ? ` — seq: ${esc(g.sequence)}` : ''
        }${g.target ? ` — target: ${esc(g.target)}` : ''} (${sizeOf(g.type)} bp)</li>`
    )
    .join('');
  const fluor = sizedList(cfg.markersFluorescent ?? []);
  const abx = sizedList(cfg.markersAntibiotic ?? []);
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
      <tr><td><b>Markers total</b></td><td>${cfg.markersSizeBp ?? 0} bp</td></tr>
      <tr><td><b>Terminator</b></td><td>${esc(cfg.terminator)} (${cfg.terminatorSizeBp ?? 0} bp)</td></tr>
      <tr><td><b>Total size</b></td><td>${cfg.totalSizeBp ?? 0} bp</td></tr>
    </table>
  `;
}

function customerProfileHtml(profile: CustomerProfileSnapshot): string {
  return `
    <h3 style="margin:24px 0 8px;font-family:sans-serif;">Customer profile</h3>
    <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;font-family:sans-serif;font-size:13px;border:1px solid #ddd;">
      <tr><td><b>First name</b></td><td>${esc(profile.firstName || '—')}</td></tr>
      <tr><td><b>Last name</b></td><td>${esc(profile.lastName || '—')}</td></tr>
      <tr><td><b>Email</b></td><td>${esc(profile.email || '—')}</td></tr>
      <tr><td><b>Institution</b></td><td>${esc(profile.institution || '—')}</td></tr>
      <tr><td><b>Position</b></td><td>${esc(profile.position || '—')}</td></tr>
      <tr><td><b>Institution address</b></td><td>${esc(profile.institutionAddress || '—')}</td></tr>
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
    const customerProfile: CustomerProfileSnapshot = {
      email: customerEmail,
      name: customerName,
      firstName: '',
      lastName: '',
      institution: '',
      position: '',
      institutionAddress: ''
    };
    try {
      const customerSnap = await fs.collection('customers').doc(uid).get();
      const cd = customerSnap.data() as {
        email?: string;
        firstName?: string;
        lastName?: string;
        name?: string;
        institution?: string;
        position?: string;
        institutionAddress?: string;
      } | undefined;
      if (cd) {
        customerEmail = cd.email || customerEmail;
        const composed = [cd.firstName, cd.lastName].filter(Boolean).join(' ').trim();
        customerName = composed || cd.name || customerName;
        customerProfile.email = customerEmail;
        customerProfile.name = customerName;
        customerProfile.firstName = cd.firstName || '';
        customerProfile.lastName = cd.lastName || '';
        customerProfile.institution = cd.institution || '';
        customerProfile.position = cd.position || '';
        customerProfile.institutionAddress = cd.institutionAddress || '';
      }
    } catch {
      // ignore
    }

    if (!customerEmail) {
      throw new HttpsError('failed-precondition', 'No email on customer profile');
    }

    if (
      !customerProfile.firstName ||
      !customerProfile.lastName ||
      !customerProfile.institution ||
      !customerProfile.position ||
      !customerProfile.institutionAddress
    ) {
      throw new HttpsError(
        'failed-precondition',
        'Please complete your profile details before submitting a plasmid order.'
      );
    }

    const configurations = payload.configurations!.map((cfg) => {
      const gRNAs = (cfg.gRNAs ?? []).map((g) => ({
        type: g.type ?? '',
        name: g.name ?? '',
        sequence: g.sequence ?? '',
        target: g.target ?? ''
      }));
      const markersFluorescent = Array.isArray(cfg.markersFluorescent) ? cfg.markersFluorescent.map(String) : [];
      const markersAntibiotic = Array.isArray(cfg.markersAntibiotic) ? cfg.markersAntibiotic.map(String) : [];
      const backboneSizeBp = sizeOrFallback(cfg.backboneSizeBp, cfg.backbone);
      const gRNAsSizeBp = gRNAs.reduce((sum, g) => sum + sizeOf(g.type), 0) || Number(cfg.gRNAsSizeBp) || 0;
      const promoterSizeBp = sizeOrFallback(cfg.promoterSizeBp, cfg.promoter);
      const edSizeBp = sizeOrFallback(cfg.edSizeBp, cfg.ed);
      const dcasSizeBp = sizeOrFallback(cfg.dcasSizeBp, cfg.dcas);
      const markersSizeBp = [...markersFluorescent, ...markersAntibiotic].reduce((sum, marker) => sum + sizeOf(marker), 0) || Number(cfg.markersSizeBp) || 0;
      const terminatorSizeBp = sizeOrFallback(cfg.terminatorSizeBp, cfg.terminator);
      const totalSizeBp = backboneSizeBp + gRNAsSizeBp + promoterSizeBp + edSizeBp + dcasSizeBp + markersSizeBp + terminatorSizeBp;

      return {
        backbone: cfg.backbone ?? '',
        backboneSizeBp,
        gRNAs,
        gRNAsSizeBp,
        promoter: cfg.promoter ?? '',
        promoterSizeBp,
        ed: cfg.ed ?? '',
        edSizeBp,
        dcas: cfg.dcas ?? '',
        dcasSizeBp,
        markersFluorescent,
        markersAntibiotic,
        markersSizeBp,
        terminator: cfg.terminator ?? '',
        terminatorSizeBp,
        totalSizeBp
      };
    });

    const now = admin.firestore.FieldValue.serverTimestamp();
    const orderRef = fs.collection('plasmid-orders').doc();

    await orderRef.set({
      customerId: uid,
      customerEmail,
      customerName,
      customerProfile,
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
          ${customerProfileHtml(customerProfile)}
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
