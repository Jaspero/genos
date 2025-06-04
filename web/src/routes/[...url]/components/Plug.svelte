<svelte:options customElement={{ tag: 'pb-plug', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large gap-y-12 plug">
  <div class="gc-12">
    <div class="image-text">
      <div class="image">
        <img src="/images/hgp-card.jpg" alt="{$language === 'en' ? 'The Human Glycome Project' : 'Projekt Humanog Glikoma'} Logo">
      </div>
      <div class="text">
        <h2>
          {@html
            $language === 'en'
              ? 'The Human Glycome Project'
              : 'Projekt Humanog Glikoma'
          }
        </h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'An ambitious scientific initiative focused on mapping the entire human glycome, encompassing all glycans present in the human body.<br><br><a href="https://www.youtube.com/@HumanGlycomeProject" target="_blank">Watch the latest videos</a> on glycobiology research and innovations.'
              : 'Ambiciozna znanstvena inicijativa usmjerena na mapiranje cijelog ljudskog glikoma, koji obuhvaća sve glikane prisutne u ljudskom tijelu.<br><br><a href="https://www.youtube.com/@HumanGlycomeProject" target="_blank">Pogledajte najnovije</a> videozapise o istraživanjima i inovacijama u glikobiologiji.'
          }
        </p>
        <div>
          <a class="button-filled" href="https://human-glycome.org/" target="_blank">
            {$language === 'en' ? 'Official website' : 'Službena stranica'}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="gc-12">
    <div class="image-text">
      <div class="image">
        <img src="/images/glycanage.jpg" alt="glycanage kit">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'From Science to Product: GlycanAge' : 'Od znanosti do proizvoda: GlycanAge'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'GlycanAge is a cutting-edge test that measures biological age by assessing chronic inflammation through glycans.<br><br>Genos has researched glycans as biomarkers over the past 18 years, and now serves as the central hub for GlycanAge blood sample analysis.'
              : 'GlycanAge je vrhunski test koji mjeri biološku dob procjenjujući kroničnu upalu putem glikana.<br><br>Genos je proučavao glikane kao biomarkere tijekom posljednjih 18 godina i sada služi kao središnje središte za analizu uzoraka krvi za GlycanAge.'
          }
        </p>
        <div>
          <a class="button-filled" href="https://glycanage.com/" target="_blank">
            {$language === 'en' ? 'Official website' : 'Službena stranica'}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="gc-12">
    <div class="image-text">
      <div class="image">
        <img src="/images/test-kit.jpg" alt="{$language === 'en' ? 'DNA Sample Collection Kit' : 'Set za prikupljanje DNA uzorka'}">
      </div>
      <div class="text">
        <h2>{$language === 'en' ? 'DNA Testing Sample Collection Kit' : 'Set za izuzimanje uzoraka za analizu DNA'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'If, due to any reason, it is not convenient for you visit our laboratory, you can also take the sample in the privacy of your home with DNA Testing Sample Collection Kit. The kit contains everything you need for quick, reliable and non-invasive sampling, shipping and delivery to our DNA Laboratory.'
              : 'Ukoliko Vam iz nekog razloga ne odgovara radi izuzimanja uzoraka dolaziti u naš laboratorij, to možete napraviti i u privatnosti vlastitog doma, korištenjem Seta za izuzimanje uzoraka za analizu DNA. U setu se nalazi sve što Vam je potrebno za brzo, pouzdano i neinvazivno izuzimanje uzoraka te njihovo slanje i dostavljanje u naš DNA laboratorij.'
          }
        </p>
      </div>
    </div>
  </div>
</div>
