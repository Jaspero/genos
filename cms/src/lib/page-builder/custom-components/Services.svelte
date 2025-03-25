<svelte:options customElement={{ tag: 'pb-services', shadow: 'none' }} />

<!--<script>
  let tab = 1;
</script>-->
<!--

<div class="grid grid-large services-grid">
    <h2 class="col-span-12">What we offer</h2>
  <div class="col-span-4 tab-selectors">
    <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>Glycomics</button>
    <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>Epigenetics</button>
    <button class="tab-selector" class:active={tab === 3} on:click={() => tab = 3}>DNA & Forensics</button>
  </div>
  <div class="col-span-8 tabs">
    {#if tab === 1}
    {:else if tab === 2}
    {:else if tab === 3}
    {:else if tab === 4}
    {:else if tab === 5}
    {/if}
  </div>
</div>-->

<div class="grid grid-large spacer">
  <div class="col-span-12">
    <h2 class="h5">What we offer</h2>
    <ul>
      <li><a class="underline" href="/glycomics">Glycomics</a></li>
      <li><a class="underline" href="/epigenetics">Epigenetics</a></li>
      <li><a class="underline" href="/dna-and-forensics">DNA & Forensics</a></li>
    </ul>
  </div>
</div>