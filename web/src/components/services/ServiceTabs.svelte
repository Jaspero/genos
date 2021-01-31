<script>
  export let services;

  let tab = 0;
</script>

<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">What we offer</h4>
    </div>
    <div class="col-12">
      <div class="gg-tabs">
        <div class="gg-tabs-selection">
          <div class="gg-tabs-buttons">
            {#each services as service, i}
              <button class="gg-tabs-button" class:active="{tab === i}" on:click={() => tab = i}>{tab}</button>
            {/each}
          </div>
        </div>
        <div class="gg-tabs-content">
          <div class="grid">
            {#if services[tab]}
              <div class="col-12 gg-read-format">
                {@html services[tab].content}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
