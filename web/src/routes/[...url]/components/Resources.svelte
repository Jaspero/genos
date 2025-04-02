<script>
  import {language} from '$lib/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-resources', shadow: 'none' }} />

<div class="grid grid-large gap-12">
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="https://glycanage.com/" target="_blank">
      <img src="/images/ga-card.jpg" alt="glycanage kit">
      <div class="p-4">
        <h3 class="font-bold underline mb-2">GlycanAge<img src="/icons/open-in-new.svg" alt="" class="publications-open-in-new"></h3>
        <span class="text-sm">
          {$language === 'en' ?
            'GlycanAge is a biological age test that measures chronic inflammation and healthspan by analyzing glycans attached to IgG antibodies. It provides science-backed insights into how lifestyle affects aging at a molecular level.' :
            'GlycanAge je test biološke dobi koji mjeri kroničnu upalu i zdravlje analizom glikana povezanih s IgG antitijelima. Pruža znanstveno podržane uvide u to kako način života utječe na starenje na molekularnoj razini.'}
        </span>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="https://human-glycome.org/" target="_blank">
      <img src="/images/hgp-card.jpg" alt="human glycome project logo">
      <div class="p-4">
        <h3 class="font-bold underline mb-2">The Human Glycome Project<img src="/icons/open-in-new.svg" alt="" class="publications-open-in-new"></h3>
        <span class="text-sm">
            {$language === 'en' ?
              'The Human Glycome Project is a research initiative focused on decoding the human glycome to advance biomedical applications, disease prevention, and personalized healthcare.' :
              'Human Glycome Project je istraživačka inicijativa usmjerena na dešifriranje ljudskog glikoma kako bi se unaprijedile biomedicinske primjene, prevencija bolesti i personalizirana zdravstvena skrb.'}
        </span>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="https://lbg.human-glycome.org/" target="_blank">
      <img src="/images/lbg-card.jpg" alt="library of brain glycans logo">
      <div class="p-4">
        <h3 class="font-bold underline mb-2">The Library of Brain Glycans<img src="/icons/open-in-new.svg" alt="" class="publications-open-in-new"></h3>
        <span class="text-sm">
          {$language === 'en' ?
            'The Library of Brain Glycans is a comprehensive database by Genos, cataloging brain-specific glycans to support research on their role in neurological function, aging, and disease.' :
            'Library of Brain Glycans je opsežna baza podataka koju je razvio Genos, a koja katalogizira specifične glikane mozga kako bi podržala istraživanje njihove uloge u neurološkoj funkciji, starenju i bolestima.'}
        </span>
      </div>
    </a>
  </div>
</div>

