<svelte:options customElement={{ tag: 'pb-collaboration', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large collaboration">
  <div class="gc-12">
    <h2 class="centered" style="max-width: 28ch">
      {
        $language === 'en'
        ? 'We’ve actively contributed to over 40 scientific projects...'
        : 'Aktivno smo sudjelovali u više od 40 znanstvenih projekata...'
      }
    </h2>
    <picture>
      <source srcset="/partners/projects-mobile.jpg" media="(max-width: 600px)">
      <img loading="lazy" src="/partners/projects.jpg" alt={$language === 'en' ? 'Logos of projects and funders: SYNHEALTH, Znanstveni centri izvrsnosti, INITIALISE, Weill Cornell Medicine, MIMOmics, GlycoMet, BackUP, European Research Council, Horizon Europe, IBD-BIOM, GlycoBioM, GlycanSwitch, 3TR, FP7, GlySign, Horizon 2020, GlyCoCan, HighGlycan, National Institutes of Health, geneTIGA' : 'Logotipi projekata i financijera: SYNHEALTH, Znanstveni centri izvrsnosti, INITIALISE, Weill Cornell Medicine, MIMOmics, GlycoMet, BackUP, European Research Council, Horizon Europe, IBD-BIOM, GlycoBioM, GlycanSwitch, 3TR, FP7, GlySign, Horizon 2020, GlyCoCan, HighGlycan, National Institutes of Health, geneTIGA'} class="centered rounded">
    </picture>
  </div>
  <div class="gc-12">
    <h2 class="centered" style="max-width: 42ch">
      {
        $language === 'en'
          ? '...and continue to collaborate with leading academic and research institutions worldwide'
          : '...i nastavljamo surađivati s vodećim akademskim i istraživačkim institucijama diljem svijeta.'
      }
    </h2>
    <picture>
      <source srcset="/partners/universities-mobile.jpg" media="(max-width: 600px)">
      <img loading="lazy" src="/partners/universities.jpg" alt={$language === 'en' ? 'Logos of partner institutions, among them Karolinska Institutet, Harvard Medical School, Johns Hopkins University, King\'s College London, Novosibirsk State University, Helmholtz Munich, Yale University, University of Oxford, Imperial College London, University of Edinburgh' : 'Logotipi partnerskih institucija, među njima Karolinska Institutet, Harvard Medical School, Johns Hopkins University, King\'s College London, Novosibirsk State University, Helmholtz Munich, Yale University, University of Oxford, Imperial College London, University of Edinburgh'} class="centered rounded">
    </picture>
  </div>
</div>