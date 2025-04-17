<svelte:options customElement={{ tag: 'pb-automated', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large automated">
  <div class="gc-12">
    <h1 class="h2">
      {
        $language === 'en' ?
          'Simple and automated scientific solutions for your research or commercial needs.' :
          'Jednostavna i automatizirana znanstvena rješenja za vaša istraživanja ili komercijalne potrebe.'
      }
    </h1>
  </div>
</div>
