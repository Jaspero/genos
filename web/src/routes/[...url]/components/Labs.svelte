<svelte:options customElement={{ tag: 'pb-labs', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large labs">
  <div class="gc-12">
    <h2 class="title">
      {$language === 'en' ? 'Services provided by our laboratories' : 'Usluge koje pružaju naši laboratoriji.'}
    </h2>
    <p class="subtitle">
      {
        $language === 'en'
          ? 'Genos unites expertise in glycomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.'
          : 'Genos ujedinjuje stručnost u glikomicima, epigenetici i DNK analizi kako bi pružio integrirana, visokokvalitetna rješenja za različite istraživačke i komercijalne primjene.'
      }
    </p>
  </div>

  <div class="gc-12">
    <div class="image-text">
      <div class="image">
        <img src="/illustrations/glycomics.jpg" alt="">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'Glycomics' : 'Glikomika'}</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'Reliable and accurate high-throughput glycan analysis and custom method development.'
              : 'Pouzdana i precizna visokoprotočna analiza glikana te razvoj prilagođenih metoda.'
          }
        </p>
        <div>
          <a class="button-filled" href="/{$language === 'en' ? 'services#1.0.' : 'usluge#1.0.'}">
            {$language === 'en' ? 'Glycomic services' : 'Usluge za glikomiku'}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/illustrations/epigenetics.jpg" alt="">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'DNA methylation analysis, gene expression profiling, and custom CRISPR/dCas9 tool design.'
              : 'Analiza metilacije DNK, profiliranje genske ekspresije i dizajn prilagođenih CRISPR/dCas9 alata.'
          }
        </p>
        <div>
          <a class="button-filled" href="{$language === 'en' ? 'services#2.0.' : 'usluge#2.0.'}">
            {$language === 'en' ? 'Epigenetic services' : 'Usluge za epigenetiku'}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/illustrations/dna.jpg" alt="">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'DNA & Forensics' : 'DNK I Forenzika'}</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'Accurate and confidential DNA testing for paternity, kinship, and identity verification.'
              : 'Točno i povjerljivo DNK testiranje za utvrđivanje očinstva, srodstva i identiteta.'
          }
        </p>
        <div>
          <a class="button-filled" href="/{$language === 'en' ? 'services#3.0.' : 'usluge#3.0.'}">
            {$language === 'en' ? 'DNA & Forensics services' : 'Usluge za DNK i forenziku'}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>