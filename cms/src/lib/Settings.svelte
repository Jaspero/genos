<script lang="ts">
  import { collection, doc, limit, onSnapshot, query, setDoc, where } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { activeRelease } from './stores/active-release.store';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { publishStartOn } from './stores/publish-start.store';
  import { alertWrapper } from './utils/alert-wrapper';
  import { clickOutside } from './utils/click-outside';
  import { db, user } from './utils/firebase';
  import type { TrackedCollectionChange } from '$lib/interfaces/tracked-collection-change.interface';

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;
  let dropdown = false;
  let changes: TrackedCollectionChange[] = [];
  let showConfirmation = false;
  let notificationCount = 0;

  /**
   * Publish is disabled if last published time is less than the publish start time and the publish start time is less than 5 minutes ago.
   */
  $: publishDisabled = !!(publishStart && (!$lastPublishedOn || $lastPublishedOn < publishStart) || ($publishStartOn && (Date.now() - $publishStartOn) <= (5 * 60 * 1000)));

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
      const { lastPublished, release, publishStart } = d.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(new Date(lastPublished).getTime());
      }

      if (publishStart) {
        publishStartOn.set(publishStart);
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

    let unsubscribeNotifications = onSnapshot(
      query(
        collection(db, 'notifications'), where('userId', '==', $user?.id), where('createdOn', '>=', $user?.lastSeen)
      ), snapshot => {
        notificationCount = snapshot.docs.length;
      }
    );

    return () => {
      unsubscribeStatus();
      unsubscribeNotifications();
    }
  });
</script>

<div class="relative">
  <button
    class="flex items-center gap-2 font-bold p-5 hover:bg-gray-100 transition-all"
    type="button"
    on:click={() => (dropdown = true)}
  >
    <span class="material-symbols-outlined">settings</span>
    <span>Settings</span>
    {#if $activeRelease?.changes?.length || notificationCount}
      <span class="red-dot"></span>
    {/if}
  </button>

  {#if dropdown}
    <div
      class="absolute right-0 bg-white shadow-lg flex flex-col divide-y whitespace-nowrap rounded-lg overflow-hidden"
      use:clickOutside
      on:click_outside={() => (dropdown = false)}
      transition:slide
    >
      <a
        class="px-4 py-3 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
        on:click={openConfirmation}
        class:disabled={publishDisabled || publishLoading || !$activeRelease?.changes?.length}
      >Release Website</a>
      <a
        class="px-4 py-3 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
        href="/dashboard/management/releases"
        on:click={() => (dropdown = false)}>Release History</a>
      <a
        class="relative px-4 py-3 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
        href="/dashboard/management/cms-notifications"
        on:click={() => (dropdown = false)}
      >
        Notifications
        {#if notificationCount}
          <span class="notification-bubble">{notificationCount}</span>
        {/if}
      </a>
    </div>
  {/if}

  {#if showConfirmation}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl overflow-auto">
        <h2 class="text-xl font-semibold mb-4">Confirm Release</h2>
        <table class="w-full text-left border-collapse">
          <thead class="bg-gray-100">
          <tr>
            <th class="p-2 border">Collection</th>
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Data</th>
            <th class="p-2 border">Updated At</th>
          </tr>
          </thead>
          <tbody>
          {#each changes as change}
            <tr>
              <td class="p-2 border">{change.collection}</td>
              <td class="p-2 border">
                <a href={change.url} target="_blank" class="text-blue-500 underline">{change.name}</a>
              </td>
              <td class="p-2 border">
                <pre class="text-sm whitespace-pre-wrap">{JSON.stringify(change.data, null, 2)}</pre>
              </td>
              <td class="p-2 border">{new Date(change.updatedAt).toLocaleString()}</td>
            </tr>
          {/each}
          </tbody>
        </table>
        <div class="flex justify-end gap-4 mt-4">
          <button class="bg-gray-300 px-4 py-2 rounded" on:click={() => (showConfirmation = false)}>Cancel</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" on:click={publish}>Confirm</button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
    .red-dot {
        @apply inline-block w-2 h-2 bg-red-500 rounded-full ml-1;
    }
    .notification-bubble {
        @apply absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5;
    }
    .disabled {
        opacity: 50%;
    }
</style>
