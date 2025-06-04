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
          ? 'Genos unites expertise in glycomics, glycoproteomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.'
          : 'Genos ujedinjuje stručnost u glikomicima, glikoproteomicima, epigenetici i DNA analizi kako bi pružio integrirana, visokokvalitetna rješenja za različite istraživačke i komercijalne primjene.'
      }
    </p>
  </div>

  <div class="gc-12">
    <div class="image-text">
      <div class="image">
        <img src="/illustrations/glycomics.jpg" alt="">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'Glycomics & Glycoproteomics' : 'Glikomika i Glikoproteomika'}</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'Reliable and accurate high-throughput glycan analysis and custom method development.'
              : 'Pouzdana i precizna visokoprotočna analiza glikana te razvoj prilagođenih metoda.'
          }
        </p>
        <div>
          <a class="button-filled" href="/{$language === 'en' ? 'services#1.0.' : 'usluge#1.0.'}">
            {$language === 'en' ? 'Glycomic & Glycoproteomic services' : 'Usluge za Glikomiku i Glikoproteomiku'}
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
              : 'Analiza metilacije DNA, profiliranje genske ekspresije i dizajn prilagođenih CRISPR/dCas9 alata.'
          }
        </p>
        <div>
          <a class="button-filled" href="{$language === 'en' ? 'services#2.0.' : 'usluge#2.0.'}">
            {$language === 'en' ? 'Epigenetics services' : 'Usluge za epigenetiku'}
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
        <h2>{$language === 'en' ? 'DNA & Forensics' : 'DNA I Forenzika'}</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'Accurate and confidential DNA testing for paternity, kinship, and identity verification.'
              : 'Točno i povjerljivo DNA testiranje za utvrđivanje očinstva, srodstva i identiteta.'
          }
        </p>
        <div>
          <a class="button-filled" href="/{$language === 'en' ? 'services#3.0.' : 'usluge#3.0.'}">
            {$language === 'en' ? 'DNA & Forensics services' : 'Usluge za DNA i forenziku'}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>