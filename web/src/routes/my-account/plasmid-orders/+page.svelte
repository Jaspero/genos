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

  function gRNAsSize(cfg: PlasmidOrder['configurations'][number]): number {
    return Number(cfg.gRNAsSizeBp) || (cfg.gRNAs ?? []).reduce((sum, g) => sum + sizeOf(g.type), 0);
  }

  function markersSize(cfg: PlasmidOrder['configurations'][number]): number {
    return Number(cfg.markersSizeBp) || [...(cfg.markersFluorescent ?? []), ...(cfg.markersAntibiotic ?? [])].reduce((sum, marker) => sum + sizeOf(marker), 0);
  }

  function totalSize(cfg: PlasmidOrder['configurations'][number]): number {
    return Number(cfg.totalSizeBp) ||
      displaySize(cfg.backboneSizeBp, cfg.backbone) +
      gRNAsSize(cfg) +
      displaySize(cfg.promoterSizeBp, cfg.promoter) +
      displaySize(cfg.edSizeBp, cfg.ed) +
      displaySize(cfg.dcasSizeBp, cfg.dcas) +
      markersSize(cfg) +
      displaySize(cfg.terminatorSizeBp, cfg.terminator);
  }

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
                    <tr><td class="text-gray-400 pr-3">Backbone</td><td>{cfg.backbone} ({displaySize(cfg.backboneSizeBp, cfg.backbone)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">gRNAs</td><td>{cfg.gRNAs.length} ({gRNAsSize(cfg)} bp)</td></tr>
                    {#each cfg.gRNAs as g, j}
                      <tr><td></td><td class="text-gray-500">#{j+1} {g.type}{g.name ? ` — ${g.name}` : ''}{g.sequence ? ` — ${g.sequence}` : ''}{g.target ? ` — target: ${g.target}` : ''}</td></tr>
                    {/each}
                    <tr><td class="text-gray-400 pr-3">Promoter</td><td>{cfg.promoter} ({displaySize(cfg.promoterSizeBp, cfg.promoter)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Effector</td><td>{cfg.ed} ({displaySize(cfg.edSizeBp, cfg.ed)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">dCas9</td><td>{cfg.dcas} ({displaySize(cfg.dcasSizeBp, cfg.dcas)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Markers</td><td>{[...cfg.markersFluorescent, ...cfg.markersAntibiotic].join(', ') || '—'} ({markersSize(cfg)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3">Terminator</td><td>{cfg.terminator} ({displaySize(cfg.terminatorSizeBp, cfg.terminator)} bp)</td></tr>
                    <tr><td class="text-gray-400 pr-3 font-bold">Total</td><td class="font-bold">{totalSize(cfg)} bp</td></tr>
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
