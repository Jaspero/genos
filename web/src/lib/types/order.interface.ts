export interface Order {
  id: string;
  createdOn: string;
  invoiceId: string;
  amount: number;
  currency: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
}
