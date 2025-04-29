<svelte:options customElement={{ tag: 'pb-collaboration', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large collaboration">
  <div class="gc-12">
    <h2 class="centered" style="max-width: 36ch">
      {
        $language === 'en'
        ? 'We have successfully completed over 40 larger and smaller collaborative projects...'
        : 'Uspješno smo završili više od 40 većih i manjih suradničkih projekata...'
      }
    </h2>
    <picture>
      <source srcset="/partners/projects-mobile.jpg" media="(max-width: 600px)">
      <img src="/partners/projects.jpg" alt="projects" class="centered rounded">
    </picture>
  </div>
  <div class="gc-12">
    <h2 class="centered" style="max-width: 36ch">
      {
        $language === 'en'
          ? '...and we collaborate with leading academic and research institutions worldwide'
          : '...i surađujemo s vodećim akademskim i istraživačkim institucijama diljem svijeta.'
      }
    </h2>
    <picture>
      <source srcset="/partners/universities-mobile.jpg" media="(max-width: 600px)">
      <img src="/partners/universities.jpg" alt="universities" class="centered rounded">
    </picture>
  </div>
</div>