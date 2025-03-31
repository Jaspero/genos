<script>
  import {language} from '$lib/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-resources', shadow: 'none' }} />

<div class="grid grid-large gap-4">
  <div class="gc-8 gc-sm-12">
    <a class="font-bold underline" href="https://glycanage.com/">Glycanage</a> -
    {$language === 'en' ?
      'GlycanAge is a biological age test that measures chronic inflammation and healthspan by analyzing glycans attached to IgG antibodies. It provides science-backed insights into how lifestyle affects aging at a molecular level.' :
      'GlycanAge je test biološke dobi koji mjeri kroničnu upalu i zdravlje analizom glikana povezanih s IgG antitijelima. Pruža znanstveno podržane uvide u to kako način života utječe na starenje na molekularnoj razini.'}
  </div>
  <div class="gc-8 gc-sm-12">
    <a class="font-bold underline" href="https://human-glycome.org/">The Human Glycome Project</a> -
    {$language === 'en' ?
      'The Human Glycome Project is a research initiative focused on decoding the human glycome to advance biomedical applications, disease prevention, and personalized healthcare.' :
      'Human Glycome Project je istraživačka inicijativa usmjerena na dešifriranje ljudskog glikoma kako bi se unaprijedile biomedicinske primjene, prevencija bolesti i personalizirana zdravstvena skrb.'}
  </div>
  <div class="gc-8 gc-sm-12">
    <a class="font-bold underline" href="https://lbg.human-glycome.org/">The Library of Brain Glycans</a> -
    {$language === 'en' ?
      'The Library of Brain Glycans is a comprehensive database by Genos, cataloging brain-specific glycans to support research on their role in neurological function, aging, and disease.' :
      'Library of Brain Glycans je opsežna baza podataka koju je razvio Genos, a koja katalogizira specifične glikane mozga kako bi podržala istraživanje njihove uloge u neurološkoj funkciji, starenju i bolestima.'}
  </div>
</div>

