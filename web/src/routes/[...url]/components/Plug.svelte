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
              ? 'If, due to any reason, it is not convenient for you to visit our laboratory, you can also take the sample in the privacy of your home with the Sample Collection Kit for DNA Testing. The kit contains everything you need for quick, reliable, and painless sampling and for sending/delivering the samples to our laboratory.<br><br>The Sample Collection Kit is used for DNA analysis from a buccal swab sample. Such samples can be collected easily and painlessly using the collectors from the kit, which are specially designed for this purpose. The sterile protective tube is designed to safeguard the sample from environmental factors, reducing the overall risk of contamination and enabling safe transport of the sample to the laboratory. If the sample is collected according to the instructions enclosed in the kit, it remains preserved in the collector for months.<br><br>All collectors, the completed order form, and proof of payment need to be enclosed in the pre-addressed protective envelope and then mailed or delivered to the laboratory.<br><br>Sample Collection Kit for DNA Testing contains:'
              : 'Ako vam iz bilo kojeg razloga ne odgovara dolazak u naš laboratorij, uzorak možete uzeti i u privatnosti vlastitog doma pomoću Seta za izuzimanje uzorka za DNA analizu. Set sadrži sve što vam je potrebno za brzo, pouzdano i bezbolno uzimanje uzoraka te njihovo slanje/dostavu u naš laboratorij.<br><br>Set za izuzimanje uzorka koristi se za DNA analizu iz brisa bukalne sluznice. Takvi se uzorci mogu jednostavno i bezbolno uzeti pomoću sakupljača iz seta, koji su posebno dizajnirani za tu svrhu. Sterilna zaštitna epruveta osigurava zaštitu uzorka od vanjskih utjecaja, smanjuje rizik od kontaminacije i omogućuje siguran transport uzorka do laboratorija. Ako se uzorak uzme prema uputama priloženima u setu, ostaje stabilan u sakupljaču mjesecima.<br><br>Svi sakupljači, ispunjena narudžbenica i potvrda o uplati moraju se staviti u unaprijed adresiranu zaštitnu omotnicu te poslati poštom ili osobno dostaviti u laboratorij.<br><br>Set za izuzimanje uzorka za DNA analizu sadrži:'
          }
        </p>
        {#if $language === 'en'}
          <ul class="list-disc ml-6">
            <li>Three collectors for samples of buccal swabs</li>
            <li>Sample storage bag</li>
            <li>Gloves</li>
            <li>Instructions</li>
            <li>Order form</li>
            <li>Unbreakable protective envelope for sending samples to laboratory</li>
          </ul>
        {:else}
          <ul class="list-disc ml-6">
            <li>Tri sakupljača za uzorke brisa bukalne sluznice</li>
            <li>Vrećica za pohranu uzorka</li>
            <li>Rukavice</li>
            <li>Upute</li>
            <li>Narudžbenica</li>
            <li>Nerazgradiva zaštitna omotnica za slanje uzoraka u laboratorij</li>
          </ul>
        {/if}
        <p>
          {@html
            $language === 'en'
              ? 'You can order the Sample Collection Kit by phone, e-mail or via our website and receive it at your home address. You can buy it in our laboratory and in pharmacies.'
              : 'Set za uzorkovanje možete naručiti telefonom, e-mailom ili putem naše web stranice i primit ćete ga na svoju kućnu adresu. Također ga možete kupiti u našem laboratoriju i u ljekarnama.'
          }
        </p>
        <div class="flex">
          {#if $language === 'en'}
            <a class="button-filled" href="/contact">Order a set for sampling</a>
          {:else}
            <a class="button-filled" href="/kontakt">Naruči set za uzorkovanje</a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>