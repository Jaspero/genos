<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
  import { db, authenticated } from '$lib/utils/firebase';
  import { meta } from '$lib/meta/meta.store';
  import type { PlasmidOrder } from '$lib/types/plasmid-order.interface';

  meta.set({ title: 'Plasmid Orders' });

  let orders: PlasmidOrder[] = [];
  let loading = true;
  let unsub: (() => void) | null = null;
  let expandedId: string | null = null;

  onMount(() => {
    const authUnsub = authenticated.subscribe((authUser) => {
      if (authUser === null) return;
      if (!authUser) {
        loading = false;
        return;
      }

      const q = query(
        collection(db, 'plasmid-orders'),
        where('customerId', '==', authUser.uid),
        orderBy('createdAt', 'desc')
      );

      unsub = onSnapshot(q, (snap) => {
        orders = snap.docs.map((d) => ({ id: d.id, ...d.data() } as PlasmidOrder));
        loading = false;
      });

      try { authUnsub(); } catch {}
    });
  });

  onDestroy(() => {
    unsub?.();
  });

  function statusColor(status: string): string {
    switch (status) {
      case 'pending-confirmation': return '#ff8c42';
      case 'confirmed': return '#3a86ff';
      case 'paid': return '#2fbf71';
      case 'cancelled': return '#e63946';
      default: return '#999';
    }
  }

  function statusLabel(status: string): string {
    switch (status) {
      case 'pending-confirmation': return 'Pending confirmation';
      case 'confirmed': return 'Confirmed';
      case 'paid': return 'Paid';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  }

  function formatDate(ts: any): string {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  function toggle(id: string) {
    expandedId = expandedId === id ? null : id;
  }
</script>

{#if loading}
  <p>Loading...</p>
{:else if !orders.length}
  <p class="text-gray-400">No plasmid orders yet.</p>
{:else}
  <div class="flex flex-col gap-4">
    {#each orders as order}
      <div class="shadow rounded p-4">
        <div class="flex justify-between items-center">
          <div>
            <span class="font-bold">Order #{order.id.slice(0, 8)}</span>
            <span class="text-gray-400 text-sm ml-2">{formatDate(order.createdAt)}</span>
          </div>
          <div class="flex items-center gap-3">
            <span
              class="text-xs font-bold px-2 py-1 rounded"
              style="background: {statusColor(order.status)}22; color: {statusColor(order.status)}; border: 1px solid {statusColor(order.status)}44;"
            >
              {statusLabel(order.status)}
            </span>
            {#if typeof order.priceEur === 'number'}
              <span class="font-bold">{order.priceEur.toFixed(2)} €</span>
            {/if}
          </div>
        </div>
        <div class="text-sm text-gray-400 mt-1">
          {order.configurations.length} configuration{order.configurations.length !== 1 ? 's' : ''}
        </div>
        <button
          class="text-sm text-blue-400 mt-2 underline"
          on:click={() => toggle(order.id)}
        >
          {expandedId === order.id ? 'Hide details' : 'Show details'}
        </button>

        {#if expandedId === order.id}
          <div class="mt-3 border-t pt-3 text-sm">
            {#if order.notes}
              <p class="text-gray-400 mb-2"><b>Notes:</b> {order.notes}</p>
            {/if}
            {#each order.configurations as cfg, i}
              <div class="mb-3 p-3 bg-slate-50 rounded" style="background:rgba(0,0,0,.02)">
                <div class="font-bold mb-1">Configuration #{i + 1}</div>
                <table class="text-sm w-full">
                  <tbody>
                    <tr><td class="text-gray-400 pr-3">Backbone</td><td>{cfg.backbone} ({cfg.backboneSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">gRNAs</td><td>{cfg.gRNAs.length} ({cfg.gRNAsSizeBp} bp)</td></tr>
                    {#each cfg.gRNAs as g, j}
                      <tr><td></td><td class="text-gray-500">#{j+1} {g.type}{g.name ? ` — ${g.name}` : ''}{g.sequence ? ` — ${g.sequence}` : ''}{g.target ? ` — target: ${g.target}` : ''}</td></tr>
                    {/each}
                    <tr><td class="text-gray-400 pr-3">Promoter</td><td>{cfg.promoter} ({cfg.promoterSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Effector</td><td>{cfg.ed} ({cfg.edSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">dCas9</td><td>{cfg.dcas} ({cfg.dcasSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Markers</td><td>{[...cfg.markersFluorescent, ...cfg.markersAntibiotic].join(', ') || '—'} ({cfg.markersSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Terminator</td><td>{cfg.terminator} ({cfg.terminatorSizeBp} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3 font-bold">Total</td><td class="font-bold">{cfg.totalSizeBp} bp</td></tr>
                  </tbody>
                </table>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
{/if}
