<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';

  interface PlasmidOrder {
    id: string;
    customerId: string;
    customerEmail: string;
    customerName: string;
    configurations: any[];
    notes?: string;
    status: string;
    priceEur?: number;
    createdAt: any;
  }

  let orders: PlasmidOrder[] = [];
  let loading = true;
  let unsub: (() => void) | null = null;

  onMount(() => {
    const q = query(
      collection(db, 'plasmid-orders'),
      orderBy('createdAt', 'desc')
    );
    unsub = onSnapshot(q, (snap) => {
      orders = snap.docs.map(d => ({ id: d.id, ...d.data() } as PlasmidOrder));
      loading = false;
    });
  });

  onDestroy(() => { unsub?.(); });

  function formatDate(ts: any): string {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function statusColor(status: string): string {
    switch (status) {
      case 'pending-confirmation': return '#ff8c42';
      case 'confirmed': return '#3a86ff';
      case 'paid': return '#2fbf71';
      case 'cancelled': return '#e63946';
      default: return '#999';
    }
  }
</script>

<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">Plasmid Orders</h1>

  {#if loading}
    <p>Loading...</p>
  {:else if !orders.length}
    <p class="text-gray-400">No plasmid orders yet.</p>
  {:else}
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b text-left">
            <th class="py-2 px-3">Date</th>
            <th class="py-2 px-3">Customer</th>
            <th class="py-2 px-3">Configs</th>
            <th class="py-2 px-3">Status</th>
            <th class="py-2 px-3">Price</th>
            <th class="py-2 px-3"></th>
          </tr>
        </thead>
        <tbody>
          {#each orders as order}
            <tr class="border-b hover:bg-slate-50">
              <td class="py-2 px-3 whitespace-nowrap">{formatDate(order.createdAt)}</td>
              <td class="py-2 px-3">
                <div class="font-bold">{order.customerName || '—'}</div>
                <div class="text-gray-400 text-xs">{order.customerEmail}</div>
              </td>
              <td class="py-2 px-3">{order.configurations.length}</td>
              <td class="py-2 px-3">
                <span
                  class="text-xs font-bold px-2 py-1 rounded"
                  style="background: {statusColor(order.status)}22; color: {statusColor(order.status)};"
                >
                  {order.status}
                </span>
              </td>
              <td class="py-2 px-3">{typeof order.priceEur === 'number' ? `${order.priceEur.toFixed(2)} €` : '—'}</td>
              <td class="py-2 px-3">
                <a
                  href="/dashboard/sales/plasmid-orders/{order.id}"
                  class="text-blue-500 hover:underline text-sm"
                >
                  View
                </a>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
