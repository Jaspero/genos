<svelte:options customElement={{ tag: 'pb-automated', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<div class="grid grid-large gap-y-12 gap-x-2 spacer automated">
  <div class="gc-12">
    <h2>
      {
        $language === 'en' ?
          'Simple and automated scientific solutions for your research or commercial needs.' :
          'Jednostavna i automatizirana znanstvena rješenja za vaša istraživanja ili komercijalne potrebe.'
      }
    </h2>
  </div>
  <div class="gc-3 gc-sm-6">
    <div class="data-number">200k+</div>
    <div class="data-label">{$language === 'en' ? 'Samples analysed to date' : 'Dosad analizirani uzorci'}</div>
    <div class="progress-bar" style="background-color: #66AACC;"></div>
  </div>
  <div class="gc-3 gc-sm-6">
    <div class="data-number">500+</div>
    <div class="data-label">{$language === 'en' ? 'Samples analysed daily' : 'Dnevno analizirani uzorci'}</div>
    <div class="progress-bar" style="background-color: #FFDD33;"></div>
  </div>
  <div class="gc-3 gc-sm-6">
    <div class="data-number">300+</div>
    <div class="data-label">{$language === 'en' ? 'Scientific publications' : 'Znanstvene publikacije'}</div>
    <div class="progress-bar" style="background-color: #66CCCC;"></div>
  </div>
  <div class="gc-3 gc-sm-6">
    <div class="data-number">40+</div>
    <div class="data-label">{$language === 'en' ? 'Collaboration projects' : 'Projekti suradnje'}</div>
    <div class="progress-bar" style="background-color: #FF9933;"></div>
  </div>
</div>