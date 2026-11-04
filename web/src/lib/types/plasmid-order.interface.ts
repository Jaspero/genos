export type PlasmidOrderStatus =
  | 'pending-confirmation'
  | 'confirmed'
  | 'paid'
  | 'cancelled';

export interface PlasmidGRNA {
  type: string;
  name: string;
  sequence: string;
  target: string;
}

export interface PlasmidConfiguration {
  backbone: string;
  backboneSizeBp: number;
  gRNAs: PlasmidGRNA[];
  gRNAsSizeBp: number;
  promoter: string;
  promoterSizeBp: number;
  ed: string;
  edSizeBp: number;
  dcas: string;
  dcasSizeBp: number;
  markersFluorescent: string[];
  markersAntibiotic: string[];
  markersSizeBp: number;
  terminator: string;
  terminatorSizeBp: number;
  /** Free text domains for the "Custom domain" effector option — never drawn on the plasmid map. */
  customDomains?: string[];
  totalSizeBp: number;
}

export interface PlasmidOrder {
  id: string;
  orderNumber?: string;
  customerId: string;
  customerEmail: string;
  customerName: string;
  configurations: PlasmidConfiguration[];
  notes?: string;
  language: 'en' | 'hr';
  status: PlasmidOrderStatus;
  priceEur?: number;
  priceNotes?: string;
  createdAt: any;
  updatedAt: any;
  confirmedAt?: any;
  paidAt?: any;
  confirmationEmailSentAt?: any;
  invoiceEmailSentAt?: any;
  paidEmailSentAt?: any;
}
