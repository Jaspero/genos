<svelte:options customElement={{ tag: 'pb-popup', shadow: 'none' }} />

<script lang="ts">
  import { browser } from '$app/environment';
  import Dialog from '$lib/Dialog.svelte';
  import { db } from '$lib/utils/firebase';
  import { styleEscape } from '$lib/utils/style-escape';
  import { doc, getDoc } from 'firebase/firestore';

  export let popup: string | undefined;
  export let label = 'Open';

  let showing = false;
  let content: string;

  $: if (browser && showing && popup) {
    Promise.all([
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'html')),
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'css'))
    ])
      .then((res) => (content = res[0].data()!.content + styleEscape(res[1].data()!.content)))
      .catch(console.error);
  }
</script>

<button class="button" type="button" on:click={() => (showing = true)}>{label}</button>

<Dialog bind:showing>
  {#if content}
    {@html content}
  {:else}
    <p>Select a popup to see content.</p>
  {/if}
</Dialog>
