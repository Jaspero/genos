<script lang="ts">
  import { doc, onSnapshot, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { activeRelease } from './stores/active-release.store';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { alertWrapper } from './utils/alert-wrapper';
  import { clickOutside } from './utils/click-outside';
  import { db } from './utils/firebase';
  import type { TrackedCollectionChange } from '$lib/interfaces/tracked-collection-change.interface';

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;
  let dropdown = false;
  let changes: TrackedCollectionChange[] = [];
  let showConfirmation = false;

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
    showConfirmation = false;
  }

  function openConfirmation() {
    if ($activeRelease?.changes?.length) {
      changes = $activeRelease.changes;
      showConfirmation = true;
    }
  }

  onMount(() => {
    const statusRef = doc(db, 'releases', 'status');

    const unsubscribeStatus = onSnapshot(statusRef, async (d) => {
      const { lastPublished, release } = d.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(new Date(lastPublished).getTime());
      }

      if (release) {
        const releaseDoc = doc(db, 'releases', release.toString());

        const unsubscribeRelease = onSnapshot(releaseDoc, (releaseSnapshot) => {
          const releaseData = releaseSnapshot.data() || {};
          const changesData = Object.entries(releaseData.changes || {}).map(([key, value]: [string, any]) => ({
            collection: value.collection,
            name: value.name,
            url: value.url,
            data: value.data,
            id: key,
            updatedAt: value.updatedAt
          }));

          activeRelease.set({ changes: changesData, release });
        });

        return () => unsubscribeRelease();
      }
    });

    return () => unsubscribeStatus();
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
    {#if $activeRelease?.changes?.length}
      <span class="red-dot"></span>
    {/if}
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
        on:click={openConfirmation}>Release Website</a
      >
      <a
        class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
        href="/dashboard/management/releases"
        on:click={() => (dropdown = false)}>Release History</a
      >
    </div>
  {/if}

  {#if showConfirmation}
    <div class="confirmation-dialog">
      <h2 class="m-b-xs">Confirm Release</h2>
      <table>
        <thead>
        <tr>
          <th>Collection</th>
          <th>Name</th>
          <th>Data</th>
          <th>Updated At</th>
        </tr>
        </thead>
        <tbody>
        {#each changes as change}
          <tr>
            <td>{change.collection}</td>
            <td>
              <a href={change.url} target="_blank" class="link">{change.name}</a>
            </td>
            <td>
              <pre>{JSON.stringify(change.data, null, 2)}</pre>
            </td>
            <td>{new Date(change.updatedAt).toLocaleString()}</td>
          </tr>
        {/each}
        </tbody>
      </table>
      <div class="button-group">
        <button on:click={() => (showConfirmation = false)}>Cancel</button>
        <button on:click={publish}>Confirm</button>
      </div>
    </div>
  {/if}
</div>

<style>
    .disabled {
        pointer-events: none;
        opacity: 0.5;
    }
    .red-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: red;
        border-radius: 50%;
        margin-left: 5px;
    }
    .confirmation-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 20px;
        z-index: 10;
        width: 90%;
        max-width: 600px;
        overflow-y: auto;
        overflow-x: hidden; /* Prevent horizontal scrolling */
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 8px;
        border: 1px solid #ccc;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    .button-group {
        display: flex;
        justify-content: flex-end; /* Align buttons to the right */
        gap: 10px; /* Space between buttons */
        margin-top: 10px; /* Space above the button group */
    }
    .link {
        color: blue; /* Link color */
        text-decoration: underline; /* Underline links */
    }
</style>
