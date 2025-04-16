<svelte:options customElement={{ tag: 'pb-labs', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<div class="grid grid-large gap-8">
  <div class="gc-12">
    <h2 class="h5 text-center">
      {$language === 'en' ? 'Explore our services provided by our laboratories' : 'Istražite naše usluge koje pružaju naši laboratoriji.'}
    </h2>
    <div class="mt-4 text-center max-w-[64ch] mx-auto">
      Genos unites expertise in glycomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.
    </div>
  </div>
  <div class="gc-12 h-full">
    <div class="lab-card lab-card-big">
      <div class="lab-card-left">
        <h3 class="h5">{$language === 'en' ? 'Glycomics' : 'Glikomika'}</h3>
        {
          $language === 'en' ?
            'Reliable and accurate high-throughput glycan analysis and custom method development.'
            : 'Pouzdana i točna visokoprotočna analiza glikana i razvoj prilagođenih metoda.'
        }
        <div>
          <button class="button-outlined">{$language === 'en' ? 'Explore' : 'Istraži'}</button>
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
        <h3 class="h5">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</h3>
        {
          $language === 'en' ?
            'DNA methylation analysis, gene expression profiling, and custom CRISPR/dCas9 tool design.'
            : 'Analiza metilacije DNK, profiliranje genske ekspresije i dizajn prilagođenih CRISPR/dCas9 alata.'
        }
        <img src="/illustrations/epigenetics-graph.svg" alt="">
        <div>
          <button class="button-outlined">{$language === 'en' ? 'Explore' : 'Istraži'}</button>
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
        <h3 class="h5">{$language === 'en' ? 'DNA laboratory' : 'DNK laboratorij'}</h3>
        {
          $language === 'en' ?
            'Accurate and confidential DNA testing for paternity, kinship, and identity verification.'
            : 'Točno i povjerljivo testiranje DNK za utvrđivanje očinstva, srodstva i identiteta.'
        }
        <img src="/illustrations/dna-graph.svg" alt="">
        <div>
          <button class="button-outlined">{$language === 'en' ? 'Explore' : 'Istraži'}</button>
        </div>
      </div>
      <div class="lab-card-right">
        <img src="/illustrations/dna.jpg" alt="">
      </div>
    </div>
  </div>
</div>