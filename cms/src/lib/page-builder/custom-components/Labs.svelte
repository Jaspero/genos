<svelte:options customElement={{ tag: 'pb-labs', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<div class="grid grid-large gap-8">
  <div class="gc-12">
    <h2 class="h5 text-center">
      {#if $language === 'en'}
        Explore our services provided by our laboratories
      {:else}
        Istražite naše usluge koje pružaju naši laboratoriji.
      {/if}
    </h2>
    <div class="mt-4 text-center max-w-[64ch] mx-auto">
      {#if $language === 'en'}
        Genos unites expertise in glycomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.
      {:else}
        Genos ujedinjuje stručnost u glikomicima, epigenetici i DNK analizi kako bi pružio integrirana, visokokvalitetna rješenja za različite istraživačke i komercijalne primjene.
      {/if}
    </div>
  </div>
  <div class="gc-12 h-full">
    <div class="lab-card lab-card-big">
      <div class="lab-card-left">
        <h3 class="h5">
          {#if $language === 'en'}
            Glycomics
          {:else}
            Glikomika
          {/if}
        </h3>
        {#if $language === 'en'}
          Reliable and accurate high-throughput glycan analysis and custom method development.
        {:else}
          Pouzdana i točna visokoprotočna analiza glikana i razvoj prilagođenih metoda.
        {/if}
        <div>
          <button class="button-outlined">
            {#if $language === 'en'}
              Explore
            {:else}
              Istraži
            {/if}
          </button>
        </div>
      </div>
      <div class="lab-card-right">
        <img src="/illustrations/glycomics.svg" alt="">
      </div>
    </div>
  </div>
  <div class="gc-6 h-full">
    <div class="lab-card lab-card-small">
      <div class="lab-card-left">
        <h3 class="h5">
          {#if $language === 'en'}
            Epigenetics
          {:else}
            Epigenetika
          {/if}
        </h3>
        {#if $language === 'en'}
          DNA methylation analysis, gene expression profiling, and custom CRISPR/dCas9 tool design.
        {:else}
          Analiza metilacije DNK, profiliranje genske ekspresije i dizajn prilagođenih CRISPR/dCas9 alata.
        {/if}
        <img src="/illustrations/epigenetics-graph.svg" alt="">
        <div>
          <button class="button-outlined">
            {#if $language === 'en'}
              Explore
            {:else}
              Istraži
            {/if}
          </button>
        </div>
      </div>
      <div class="lab-card-right">
        <img src="/illustrations/epigenetics.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="gc-6 h-full">
    <div class="lab-card lab-card-small">
      <div class="lab-card-left">
        <h3 class="h5">
          {#if $language === 'en'}
            DNA laboratory
          {:else}
            DNK laboratorij
          {/if}
        </h3>
        {#if $language === 'en'}
          Accurate and confidential DNA testing for paternity, kinship, and identity verification.
        {:else}
          Točno i povjerljivo testiranje DNK za utvrđivanje očinstva, srodstva i identiteta.
        {/if}
        <img src="/illustrations/dna-graph.svg" alt="">
        <div>
          <button class="button-outlined">
            {#if $language === 'en'}
              Explore
            {:else}
              Istraži
            {/if}
          </button>
        </div>
      </div>
      <div class="lab-card-right">
        <img src="/illustrations/dna.jpg" alt="">
      </div>
    </div>
  </div>
</div>