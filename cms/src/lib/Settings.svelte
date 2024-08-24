<script lang="ts">
  import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { activeRelease } from './stores/active-release.store';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { alertWrapper } from './utils/alert-wrapper';
  import { clickOutside } from './utils/click-outside';
  import { db } from './utils/firebase';

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;
  let dropdown = false;

  $: publishDisabled = !!(publishStart && (!$lastPublishedOn || $lastPublishedOn < publishStart));

  async function publish() {
    publishLoading = true;
    publishStart = Date.now();

    await alertWrapper(
      setDoc(doc(db, 'releases', 'status'), { publishStart }, { merge: true }),
      'Deployment Started!'
    );

    publishLoading = false;
    dropdown = false;
  }

  onMount(() => {
    onSnapshot(doc(db, 'releases', 'status'), async (d) => {
      const { lastPublished, release } = d.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(lastPublished);
      }

      if (release) {
        const releaseDoc = await getDoc(doc(db, 'releases', release));
        const releaseData = releaseDoc.data() || {};

        const changes = Object.entries(releaseData.changes || {}).map(([key, value]) => ({
          page: key,
          ...(value as any)
        }));

        activeRelease.set({ changes, release });
      }
    });
  });
</script>

<div class="relative">
  <button
    class="flex align-middle gap-2 pointer font-bold hover:bg-black/5 transition-all p-5"
    type="button"
    on:click={() => (dropdown = true)}
  >
    <span class="material-symbols-outlined">settings</span>
    <span>Settings</span>
  </button>

  {#if dropdown}
    <div
      class="absolute right-0 bg-white shadow flex flex-col whitespace-nowrap divide-y"
      use:clickOutside
      on:click_outside={() => (dropdown = false)}
      transition:slide
    >
      <a
        class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
        class:disabled={publishDisabled || publishLoading || !$activeRelease?.changes?.length}
        href="/dashboard/management/release-history"
        on:click={publish}>Release Website</a
      >
      <a
        class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
        class:disabled={!$activeRelease?.changes?.length}
        href="/dashboard/management/release-history"
        on:click={() => (dropdown = false)}>Pending Changes</a
      >
      <a
        class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
        href="/dashboard/management/release-history"
        on:click={() => (dropdown = false)}>Release History</a
      >
    </div>
  {/if}
</div>

<style>
  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
</style>
