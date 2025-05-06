<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-resources', shadow: 'none' }} />

<div class="grid grid-large resources">
  <div class="gc-12">
    <div class="image-text">
      <div class="text">
        <h2>{$language === 'en' ? 'Why glycans?' : 'Zašto glikani?'}</h2>
        <p class="text-p">
          {@html
            $language === 'en'
              ? 'Glycosylation is one of the most important posttranslational modifications found in organisms from bacteria to humans. The addition of glycans, branched oligosaccharides, determines the structure and function of proteins and other macromolecules.<br><br>However, unlike the other three types of macromolecules (nucleic acids, lipids, and proteins), glycans are still on the margins of contemporary science. If proteins are the main workforce in living organisms, secondary modifications are the tools that give each one its functional purpose. And glycans are the pinnacle of life\'s toolkit.<br><br>The level of molecular complexity achieved by glycosylation increases the proteome diversity to orders of magnitude greater than any other secondary modification. Over half of all existing proteins are glycosylated, as well as virtually all secreted proteins. Many of them take on the role of biomarkers or therapeutics in modern biomedicine - a role for which glycosylation is essential.<br><br>Determining exact glycosylation patterns is not only important in research and development but also in clinical settings where they can serve prognostic as well as diagnostic purposes. Personalized and targeted medicine can hardly exist without taking glycans into account.<br><br>Additionally, glycosylation of biopharmaceuticals can have a significant impact on their effectiveness and safety. Failure to characterize it can result in increased heterogeneity, unsatisfactory clinical outcomes, or even legal consequences.<br><br>GENOS specializes in high-throughput glycan analysis using methods developed over 15 years of experience in academia and partnerships with clients in the clinical, pharmaceutical, and biotech industries.'
              : 'Glikozilacija je jedna od najvažnijih posttranslacijskih modifikacija prisutna u organizmima od bakterija do ljudi. Dodavanje glikana, razgranatih oligosaharida, određuje strukturu i funkciju proteina i drugih makromolekula.<br><br>Međutim, za razliku od preostale tri vrste makromolekula (nukleinskih kiselina, lipida i proteina), glikani se i dalje nalaze na marginama suvremene znanosti. Ako su proteini glavna radna snaga živih organizama, sekundarne modifikacije su alati koji svakom od njih daju funkcionalnu svrhu. A glikani su vrhunac tog životnog alata.<br><br>Razina molekularne složenosti koju omogućuje glikozilacija povećava raznolikost proteoma za nekoliko redova veličine više nego bilo koja druga sekundarna modifikacija. Više od polovice svih postojećih proteina je glikozilirano, uključujući gotovo sve sekretorne proteine. Mnogi od njih imaju ulogu biomarkera ili terapijskih sredstava u modernoj biomedicini – ulogu za koju je glikozilacija ključna.<br><br>Određivanje točnih obrazaca glikozilacije nije važno samo u istraživanju i razvoju, već i u kliničkom okruženju gdje može imati prognostičku i dijagnostičku vrijednost. Personalizirana i ciljana medicina teško da mogu postojati bez uzimanja glikana u obzir.<br><br>Osim toga, glikozilacija biofarmaceutika može imati značajan utjecaj na njihovu učinkovitost i sigurnost. Neuspjeh u karakterizaciji može dovesti do povećane heterogenosti, nezadovoljavajućih kliničkih ishoda ili čak pravnih posljedica.<br><br>GENOS je specijaliziran za visokoprotočnu analizu glikana koristeći metode razvijene kroz više od 15 godina iskustva u akademskoj zajednici i suradnji s klijentima iz kliničke, farmaceutske i biotehnološke industrije.'
          }
        </p>
      </div>
      <div class="images">
        <div class="image">
          <img src="/images/why-1.jpg" alt="">
        </div>
        <div class="image">
          <img src="/images/why-2.jpg" alt="">
        </div>
        <div class="image">
          <img src="/images/why-3.jpg" alt="">
        </div>
        <div class="image">
          <img src="/images/why-4.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-large labs">
  <div class="gc-12">
    <h2 class="title">
      {$language === 'en' ? 'Additional resources' : 'Dodatni linkovi'}
    </h2>
  </div>

  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/hgp-card.jpg" alt="">
      </div>
      <div class="text">
        <h2>The Human Glycome Project</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'The Human Glycome Project is a research initiative focused on decoding the human glycome to advance biomedical applications, disease prevention, and personalized healthcare.'
              : 'The Human Glycome Project istraživačka je inicijativa usmjerena na dešifriranje ljudskog glikoma s ciljem unapređenja biomedicinskih primjena, prevencije bolesti i personalizirane zdravstvene skrbi.'
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

  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/lbg-card.jpg" alt="">
      </div>
      <div class="text">
        <h2>Glyco database</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'The Library of Brain Glycans is a comprehensive database by Genos, cataloging brain-specific glycans to support research on their role in neurological function, aging, and disease.'
              : 'The Library of Brain Glycans je sveobuhvatna baza podataka koju je razvio Genos, a katalogizira glikane specifične za mozak kako bi podržala istraživanja njihove uloge u neurološkim funkcijama, starenju i bolestima.'
          }
        </p>
        <div>
          <a class="button-filled" href="https://lbg.human-glycome.org/" target="_blank">
            {$language === 'en' ? 'Official website' : 'Službena stranica'}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="gc-12 spacer">
    <div class="image-text">
      <div class="image">
        <img src="/images/glycanage.jpg" alt="">
      </div>
      <div class="text">
        <h2>GlycanAge</h2>
        <p class="text-p">
          {
            $language === 'en'
              ? 'GlycanAge is a biological age test that measures chronic inflammation and healthspan by analyzing glycans attached to IgG antibodies. It provides science-backed insights into how lifestyle affects aging at a molecular level.'
              : 'GlycanAge je test biološke dobi koji mjeri kroničnu upalu i trajanje zdravog života analizom glikana vezanih za IgG protutijela. Pruža znanstveno utemeljene uvide u to kako način života utječe na starenje na molekularnoj razini.'
          }
        </p>
        <div>
          <a class="button-filled" href="https://glycanage.com/" target="blank">
            {$language === 'en' ? 'Official website' : 'Službena stranica'}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>