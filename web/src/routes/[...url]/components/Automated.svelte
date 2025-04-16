<svelte:options customElement={{ tag: 'pb-automated', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<div class="automated">
  <img src="/images/pipettes.jpg" alt="" class="automated-img">
  <h1 class="automated-text h3">
    {
      $language === 'en' ?
        'Simple and automated scientific solutions for your research or commercial needs.' :
        'Jednostavna i automatizirana znanstvena rješenja za vaša istraživanja ili komercijalne potrebe.'
    }
  </h1>
</div>
