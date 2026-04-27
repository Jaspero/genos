<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { doc, onSnapshot, updateDoc, serverTimestamp } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';

  let order: any = null;
  let loading = true;
  let unsub: (() => void) | null = null;
  let saving = false;

  let editPrice = '';
  let editPriceNotes = '';
  let editStatus = '';

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

  function sizeOf(label: string): number {
    const normalized = String(label || '').trim();
    return SIZE_BP[normalized] || SIZE_BP[baseED(normalized)] || 0;
  }

  function displaySize(stored: unknown, label: string): number {
    return Number(stored) || sizeOf(label);
  }

  function gRNAsSize(cfg: any): number {
    return Number(cfg.gRNAsSizeBp) || (cfg.gRNAs ?? []).reduce((sum: number, g: any) => sum + sizeOf(g.type), 0);
  }

  function markersSize(cfg: any): number {
    return Number(cfg.markersSizeBp) || [...(cfg.markersFluorescent ?? []), ...(cfg.markersAntibiotic ?? [])].reduce((sum: number, marker: string) => sum + sizeOf(marker), 0);
  }

  function totalSize(cfg: any): number {
    return Number(cfg.totalSizeBp) ||
      displaySize(cfg.backboneSizeBp, cfg.backbone) +
      gRNAsSize(cfg) +
      displaySize(cfg.promoterSizeBp, cfg.promoter) +
      displaySize(cfg.edSizeBp, cfg.ed) +
      displaySize(cfg.dcasSizeBp, cfg.dcas) +
      markersSize(cfg) +
      displaySize(cfg.terminatorSizeBp, cfg.terminator);
  }

  $: orderId = $page.params.id;

  onMount(() => {
    const ref = doc(db, 'plasmid-orders', orderId);
    unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        order = { id: snap.id, ...snap.data() };
        if (!editStatus) {
          editStatus = order.status;
          editPrice = order.priceEur != null ? String(order.priceEur) : '';
          editPriceNotes = order.priceNotes || '';
        }
      }
      loading = false;
    });
  });

  onDestroy(() => { unsub?.(); });

  function formatDate(ts: any): string {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  async function confirmOrder() {
    const price = parseFloat(editPrice);
    if (isNaN(price) || price <= 0) {
      alert('Please set a valid price before confirming.');
      return;
    }
    saving = true;
    try {
      await updateDoc(doc(db, 'plasmid-orders', orderId), {
        status: 'confirmed',
        priceEur: price,
        priceNotes: editPriceNotes,
        updatedAt: serverTimestamp()
      });
      editStatus = 'confirmed';
    } catch (e: any) {
      alert(e.message);
    }
    saving = false;
  }

  async function markPaid() {
    saving = true;
    try {
      await updateDoc(doc(db, 'plasmid-orders', orderId), {
        status: 'paid',
        updatedAt: serverTimestamp()
      });
      editStatus = 'paid';
    } catch (e: any) {
      alert(e.message);
    }
    saving = false;
  }

  async function cancelOrder() {
    if (!confirm('Cancel this order?')) return;
    saving = true;
    try {
      await updateDoc(doc(db, 'plasmid-orders', orderId), {
        status: 'cancelled',
        updatedAt: serverTimestamp()
      });
      editStatus = 'cancelled';
    } catch (e: any) {
      alert(e.message);
    }
    saving = false;
  }

  async function saveFields() {
    saving = true;
    const updates: Record<string, any> = { updatedAt: serverTimestamp() };
    const price = parseFloat(editPrice);
    if (!isNaN(price) && price > 0) updates.priceEur = price;
    if (editPriceNotes !== (order?.priceNotes || '')) updates.priceNotes = editPriceNotes;
    try {
      await updateDoc(doc(db, 'plasmid-orders', orderId), updates);
    } catch (e: any) {
      alert(e.message);
    }
    saving = false;
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

<div class="p-6 max-w-4xl">
  <a href="/dashboard/sales/plasmid-orders" class="text-blue-500 hover:underline text-sm mb-4 inline-block">← Back to list</a>

  {#if loading}
    <p>Loading...</p>
  {:else if !order}
    <p>Order not found.</p>
  {:else}
    <div class="flex items-center gap-3 mb-4">
      <h1 class="text-2xl font-bold">Order #{order.id.slice(0, 8)}</h1>
      <span
        class="text-xs font-bold px-2 py-1 rounded"
        style="background: {statusColor(order.status)}22; color: {statusColor(order.status)};"
      >
        {order.status}
      </span>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="shadow rounded p-4">
        <h3 class="font-bold mb-2">Customer</h3>
        <p>{order.customerName || '—'}</p>
        <p class="text-gray-400 text-sm">{order.customerEmail}</p>
        <p class="text-gray-400 text-xs mt-1">UID: {order.customerId}</p>
      </div>
      <div class="shadow rounded p-4">
        <h3 class="font-bold mb-2">Dates</h3>
        <p class="text-sm">Created: {formatDate(order.createdAt)}</p>
        <p class="text-sm">Updated: {formatDate(order.updatedAt)}</p>
        {#if order.confirmedAt}<p class="text-sm">Confirmed: {formatDate(order.confirmedAt)}</p>{/if}
        {#if order.paidAt}<p class="text-sm">Paid: {formatDate(order.paidAt)}</p>{/if}
        {#if order.invoiceEmailSentAt}<p class="text-sm text-green-600">Invoice email sent: {formatDate(order.invoiceEmailSentAt)}</p>{/if}
        {#if order.paidEmailSentAt}<p class="text-sm text-green-600">Payment email sent: {formatDate(order.paidEmailSentAt)}</p>{/if}
      </div>
    </div>

    {#if order.notes}
      <div class="shadow rounded p-4 mb-6">
        <h3 class="font-bold mb-2">Customer Notes</h3>
        <p class="text-sm whitespace-pre-wrap">{order.notes}</p>
      </div>
    {/if}

    <div class="shadow rounded p-4 mb-6">
      <h3 class="font-bold mb-3">Pricing & Status</h3>
      <div class="flex gap-4 items-end flex-wrap">
        <div>
          <label class="block text-sm text-gray-500 mb-1" for="price">Price (EUR)</label>
          <input id="price" type="number" step="0.01" min="0" class="border rounded px-3 py-2 w-40" bind:value={editPrice} />
        </div>
        <div class="flex-1">
          <label class="block text-sm text-gray-500 mb-1" for="priceNotes">Price notes</label>
          <input id="priceNotes" type="text" class="border rounded px-3 py-2 w-full" bind:value={editPriceNotes} />
        </div>
        <button
          class="bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-sm font-bold"
          on:click={saveFields}
          disabled={saving}
        >
          Save
        </button>
      </div>
      <div class="flex gap-3 mt-4">
        {#if order.status === 'pending-confirmation'}
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold"
            on:click={confirmOrder}
            disabled={saving}
          >
            Confirm & Send Invoice
          </button>
          <button
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-bold"
            on:click={cancelOrder}
            disabled={saving}
          >
            Cancel Order
          </button>
        {/if}
        {#if order.status === 'confirmed'}
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-bold"
            on:click={markPaid}
            disabled={saving}
          >
            Mark as Paid
          </button>
          <button
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-bold"
            on:click={cancelOrder}
            disabled={saving}
          >
            Cancel Order
          </button>
        {/if}
      </div>
    </div>

    <div class="shadow rounded p-4">
      <h3 class="font-bold mb-3">Configurations ({order.configurations.length})</h3>
      {#each order.configurations as cfg, i}
        <div class="mb-4 p-3 bg-slate-50 rounded border">
          <div class="font-bold mb-2">Configuration #{i + 1} — {totalSize(cfg)} bp total</div>
          <table class="text-sm w-full">
            <tbody>
              <tr><td class="text-gray-400 pr-3 py-1">Backbone</td><td>{cfg.backbone} ({displaySize(cfg.backboneSizeBp, cfg.backbone)} bp)</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">gRNAs</td><td>{cfg.gRNAs?.length ?? 0} ({gRNAsSize(cfg)} bp)</td></tr>
              {#each (cfg.gRNAs ?? []) as g, j}
                <tr><td></td><td class="text-gray-500 py-0.5">#{j+1} {g.type}{g.name ? ` — ${g.name}` : ''}{g.sequence ? ` — seq: ${g.sequence}` : ''}{g.target ? ` — target: ${g.target}` : ''}</td></tr>
              {/each}
              <tr><td class="text-gray-400 pr-3 py-1">Promoter</td><td>{cfg.promoter} ({displaySize(cfg.promoterSizeBp, cfg.promoter)} bp)</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">Effector</td><td>{cfg.ed} ({displaySize(cfg.edSizeBp, cfg.ed)} bp)</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">dCas9</td><td>{cfg.dcas} ({displaySize(cfg.dcasSizeBp, cfg.dcas)} bp)</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">Markers (fluor)</td><td>{(cfg.markersFluorescent ?? []).join(', ') || '—'}</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">Markers (abx)</td><td>{(cfg.markersAntibiotic ?? []).join(', ') || '—'} ({markersSize(cfg)} bp)</td></tr>
              <tr><td class="text-gray-400 pr-3 py-1">Terminator</td><td>{cfg.terminator} ({displaySize(cfg.terminatorSizeBp, cfg.terminator)} bp)</td></tr>
            </tbody>
          </table>
        </div>
      {/each}
    </div>
  {/if}
</div>
