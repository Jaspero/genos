<svelte:options customElement={{ tag: 'pb-collaboration', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
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
      <img src="/partners/projects.jpg" alt="projects" class="centered rounded">
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
      <img src="/partners/universities.jpg" alt="sniversities" class="centered rounded">
    </picture>
  </div>
</div>