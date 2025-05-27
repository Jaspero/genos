<svelte:options customElement={{ tag: 'pb-services', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
  import {slide} from 'svelte/transition';

  let glycomics = false;
  let epigenetics = false;
  let forensics = false;
</script>

<div class="grid grid-small services">
  <div class="gc-12 mb-24">
    <h2>
      {
        $language === 'en'
          ? 'Genos unites expertise in glycomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.'
          : 'Genos objedinjuje stručnost u glikomici, epigenetici i analizi DNK kako bi pružio integrirana, visokokvalitetna rješenja za raznolike istraživačke i komercijalne primjene.'
      }
    </h2>
  </div>
  <div class="gc-3 sticky">
    <p>
      {
        $language === 'en'
          ? 'Quick links:'
          : 'Izbornik:'
      }
    </p>
    <div class="sticky-items">
      <button class="flex" on:click={() => {
          glycomics = !glycomics;
          epigenetics = false;
          forensics = false;
        }}>
        {$language === 'en' ? 'Glycomics' : 'Glikomika'}
        <img src="/icons/arrow_dropdown.svg" alt="" class:rotate-180={glycomics}>
      </button>
      {#if glycomics}
        <div class="flex flex-col gap-y-1" transition:slide>
          <a href="{$language === 'en' ? '/services#1.0.' : '/usluge#1.0.'}" class="sub-link">
            1. {$language === 'en' ? 'Glycomics' : 'Glikomika'}
          </a>
          <a href="{$language === 'en' ? '/services#1.1.' : '/usluge#1.1.'}" class="sub-link">
            1.1. {$language === 'en' ? 'Technologies' : 'Tehnologije'}
          </a>
          <a href="{$language === 'en' ? '/services#1.2.' : '/usluge#1.2.'}" class="sub-link">
            1.2. {$language === 'en' ? 'Sample types' : 'Tipovi uzoraka'}
          </a>
          <a href="{$language === 'en' ? '/services#1.3.' : '/usluge#1.3.'}" class="sub-link">
            1.3. {$language === 'en' ? 'Glycoprofiling' : 'Glikoprofiliranje'}
          </a>
          <a href="{$language === 'en' ? '/services#1.4.' : '/usluge#1.4.'}" class="sub-link">
            1.4. {$language === 'en' ? 'High-throughput analyses' : 'Visokoprotočne analize'}
          </a>
          <a href="{$language === 'en' ? '/services#1.5.' : '/usluge#1.5.'}" class="sub-link">
            1.5. {$language === 'en' ? 'Data analysis' : 'Analiza podataka'}
          </a>
          <a href="{$language === 'en' ? '/services#1.6.' : '/usluge#1.6.'}" class="sub-link">
            1.6. {$language === 'en' ? 'Study design' : 'Dizajn studije'}
          </a>
          <a href="{$language === 'en' ? '/services#1.7.' : '/usluge#1.7.'}" class="sub-link">
            1.7. {$language === 'en' ? 'Joint research collaboration' : 'Zajednička znanstvena suradnja'}
          </a>
        </div>
      {/if}
      <button class="flex" on:click={() => {
          glycomics = false;
          epigenetics = !epigenetics;
          forensics = false;
        }}>
        {$language === 'en' ? 'Epigenetics' : 'Epigenetika'}
        <img src="/icons/arrow_dropdown.svg" alt="" class:rotate-180={epigenetics}>
      </button>
      {#if epigenetics}
        <div class="flex flex-col gap-y-1" transition:slide>
          <a href="{$language === 'en' ? '/services#2.0.' : '/usluge#2.0.'}" class="sub-link">
            2. {$language === 'en' ? 'Epigenetics' : 'Epigenetika'}
          </a>
          <a href="{$language === 'en' ? '/services#2.1.' : '/usluge#2.1.'}" class="sub-link">
            2.1. {$language === 'en' ? 'Technologies' : 'Tehnologije'}
          </a>
          <a href="{$language === 'en' ? '/services#2.2.' : '/usluge#2.2.'}" class="sub-link">
            2.2. {$language === 'en' ? 'Services' : 'Usluge'}
          </a>
        </div>
      {/if}
      <button class="flex" on:click={() => {
          glycomics = false;
          epigenetics = false;
          forensics = !forensics;
        }}>
        {$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}
        <img src="/icons/arrow_dropdown.svg" alt="" class:rotate-180={forensics}>
      </button>
      {#if forensics}
        <div class="flex flex-col gap-y-1" transition:slide>
          <a href="{$language === 'en' ? '/services#3.0.' : '/usluge#3.0.'}" class="sub-link">
            3. {$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}
          </a>
          <a href="{$language === 'en' ? '/services#3.1.' : '/usluge#3.1.'}" class="sub-link">
            3.1. {$language === 'en' ? 'Paternity testing' : 'Test očinstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.2.' : '/usluge#3.2.'}" class="sub-link">
            3.2. {$language === 'en' ? 'Kinship testing' : 'Test srodstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.3.' : '/usluge#3.3.'}" class="sub-link">
            3.3. {$language === 'en'
            ? 'Non-Invasive Prenatal Gender and Paternity Testing'
            : 'Neinvazivno prenatalno utvrđivanje spola i očinstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.4.' : '/usluge#3.4.'}" class="sub-link">
            3.4. {$language === 'en' ? 'Other analyses' : 'Ostale analize'}
          </a>
          <a href="{$language === 'en' ? '/services#3.5.' : '/usluge#3.5.'}" class="sub-link">
            3.5. {$language === 'en'
            ? 'Avian Gender Determination via DNA Analysis'
            : 'Određivanje spola ptica DNK analizom'}
          </a>
          <a href="{$language === 'en' ? '/services#3.6.' : '/usluge#3.6.'}" class="sub-link">
            3.6. {$language === 'en' ? 'Testing Procedure' : 'Postupak testiranja'}
          </a>
          <a href="{$language === 'en' ? '/services#3.7.' : '/usluge#3.7.'}" class="sub-link">
            3.7. {$language === 'en' ? 'Data confidentiality' : 'Povjerljivost podataka'}
          </a>
        </div>
      {/if}
    </div>
  </div>
  <div class="gc-9 services-container">
    <h3 id="1.0.">1. {$language === 'en' ? 'Glycomics' : 'Glikomika'}</h3>
    <img src="/illustrations/glycomics.jpg" alt="" class="w-full">
    <div class="services-segment">
      <h4 id="1.1.">1.1. {$language === 'en' ? 'Technologies' : 'Tehnologije'}</h4>
      <div class="services-images-row">
        <div>
          <img src="/images/uhplc.jpg" alt="">
        </div>
        <div>
          <img src="/images/cge.jpg" alt="">
        </div>
        <div>
          <img src="/images/ms.jpg" alt="">
        </div>
      </div>
      <h5>
        {$language === 'en' ? 'UHPLC GLYCOPROFILING (1)' : 'UHPLC GLIKOPROFILIRANJE (1)'}
      </h5>
      <p>
        {
          $language === 'en'
            ? '7 Waters UHPLC instruments with fluorescence detectors, HT glycoprofiling of up to 200 samples/day'
            : '7 Waters UHPLC instrumenata s fluorescentnim detektorima, visokoprotočno glikoprofiliranje do 200 uzoraka dnevno'
        }
      </p>
      <h5>
        {$language === 'en' ? 'CGE GLYCOPROFILING (2)' : 'CGE GLIKOPROFILIRANJE (2)'}
      </h5>
      <p>
        {
          $language === 'en'
            ? '2 Applied Biosystems 3500 DNA sequencers adapted for glycan analysis, HT glycoprofiling of up to 300 samples/day'
            : '2 Applied Biosystems 3500 DNK sekvencera prilagođena za analizu glikana, visokoprotočno glikoprofiliranje do 300 uzoraka dnevno'
        }
      </p>
      <h5>
        {$language === 'en' ? 'MS GLYCOPROFILING (3)' : 'MS GLIKOPROFILIRANJE (3)'}
      </h5>
      <p>
        {
          $language === 'en'
            ? '2 Bruker Compact Q-TOF coupled to Waters nanoUPLC systems, Orbitrap Exploris 240 coupled to Dionex UltiMate 3000 RSLCnano system, HT glycoprofiling of up to 100 samples/day'
            : '2 Bruker Compact Q-TOF spojena s Waters nanoUPLC sustavima, Orbitrap Exploris 240 spojen na Dionex UltiMate 3000 RSLCnano sustav, visokoprotočno glikoprofiliranje do 100 uzoraka dnevno'
        }
      </p>
    </div>
    <div class="services-segment">
      <h4 id="1.2.">1.2. {$language === 'en' ? 'Sample types' : 'Vrste uzoraka'}</h4>
      <div class="services-images-row">
        <div>
          <img src="/images/glycoprofiling/glycoprofiling-1.jpg" alt="">
        </div>
        <div>
          <img src="/images/glycoprofiling/glycoprofiling-2.jpg" alt="">
        </div>
        <div>
          <img src="/images/glycoprofiling/glycoprofiling-3.jpg" alt="">
        </div>
      </div>
      <ul>
        {$language === 'en' ? 'Complex biological samples' : 'Složeni biološki uzorci'}
        <li class="ml-6">{$language === 'en' ? '(e.g. human serum/plasma, cell lysates, tissues)' : '(npr. ljudski serum/plazma, stanični lizati, tkiva)'}</li>
      </ul>

      <ul>
        {$language === 'en' ? 'Purified glycoproteins' : 'Pročišćeni glikoproteini'}
        <li class="ml-6">{$language === 'en' ? '(e.g. human IgG, IgA, AGP, C3, transferrin, HDL, LDL, rodent IgG)' : '(npr. ljudski IgG, IgA, AGP, C3, transferin, HDL, LDL, IgG glodavaca)'}</li>
      </ul>

      <ul>
        {$language === 'en' ? 'Biopharmaceuticals' : 'Biofarmaceutici'}
        <li class="ml-6">{$language === 'en' ? '(e.g. mAb)' : '(npr. monoklonska antitijela)'}</li>
      </ul>
    </div>
    <div class="services-segment">
      <h4 id="1.3.">1.3. {$language === 'en' ? 'Glycoprofiling' : 'Glikoprofiliranje'}</h4>
      <h5>
        {$language === 'en' ? 'Released N-glycans' : 'Oslobođeni N-glikani'}
      </h5>
      <p>
        {
          $language === 'en'
            ? 'N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled, purified and analysed by hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) or capillary gel electrophoresis with laser-induced fluorescence (CGE-LIF), which allows relative quantification of different glycan species. Assignment of N-glycan structures is based on HILIC retention time, accurate mass and fragmentation spectra obtained by coupling HILIC-UHPLC-FLD to mass spectrometry via electrospray ionization (ESI-MS/MS).'
            : 'N-glikani se oslobađaju iz glikoproteina digestijom s PNGaseF, fluorescentno se obilježavaju, pročišćavaju i analiziraju hidrofilnom interakcijskom ultra-visokoučinkovitom tekućinskom kromatografijom s fluorescentnom detekcijom (HILIC-UHPLC-FLD) ili kapilarnom gel elektroforezom s laserski induciranom fluorescencijom (CGE-LIF), što omogućuje relativnu kvantifikaciju različitih glikanskih vrsta. Identifikacija N-glikanskih struktura temelji se na HILIC retencijskom vremenu, točnoj masi i spektrima fragmentacije dobivenima spajanjem HILIC-UHPLC-FLD sustava s masenom spektrometrijom putem elektrospray ionizacije (ESI-MS/MS).'
        }
      </p>
      <h5>
        {$language === 'en' ? 'Site-specific glycosylation' : 'Specifična glikozilacija po mjestu'}
      </h5>
      <p>
        {
          $language === 'en'
            ? 'N-glycopeptides are obtained from glycoproteins by protease digestion, purified and analysed by C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS/MS). Relative quantification of N-glycopeptides is obtained in a site-specific manner determined by the amino acid sequence of the glycoprotein. Assignment of N-glycopeptide structures is based on accurate mass and fragmentation spectra.'
            : 'N-glikopeptidi se dobivaju iz glikoproteina proteolitičkom digestijom, pročišćavaju se i analiziraju C18 tekućinskom kromatografijom spojenom s masenom spektrometrijom putem elektrospray ionizacije (C18-LC-ESI-MS/MS). Relativna kvantifikacija N-glikopeptida dobiva se na specifičan način određen aminokiselinskim slijedom glikoproteina. Dodjeljivanje struktura N-glikopeptida temelji se na točnoj masi i spektrima fragmentacije.'
        }
      </p>
      <h5>
        {$language === 'en' ? 'Glycosylation site occupancy' : 'Zauzetost mjesta glikozilacije'}
      </h5>
      <p>
        {
          $language === 'en'
            ? 'Site occupancy analysis is used to calculate the occupancy of potential N-glycosylation sites by measuring the proportion of N-glycosylated peptides in total peptides. The analysis is performed by releasing N-glycans with PNGaseF in the presence of 18O water followed by protease digestion, purification and C18-LC-ESI-MS/MS.'
            : 'Analiza zauzetosti mjesta koristi se za izračun udjela potencijalnih N-glikozilacijskih mjesta koji su stvarno glikozilirani, mjerenjem udjela N-glikoziliranih peptida u ukupnoj količini peptida. Analiza se provodi oslobađanjem N-glikana pomoću PNGaseF u prisutnosti vode obogaćene kisikom-18 (^18O), nakon čega slijede proteolitička digestija, pročišćavanje i C18-LC-ESI-MS/MS analiza.'
        }
      </p>
    </div>
    <div class="services-segment dropdowns">
      <h4 id="1.4.">1.4. {$language === 'en' ? 'High-Throughput analyses' : 'Visokoprotočne analize'}</h4>
      <p>
        {
          $language === 'en'
            ? 'Genos offers in-depth glycoprofiling for various sample types such as biopharmaceuticals and glycoproteins purified from complex samples. Sample preparation conditions and analysis parameters are optimised for a specific sample.'
            : 'Genos nudi detaljno glikoprofiliranje za različite vrste uzoraka kao što su biofarmaceutici i glikoproteini pročišćeni iz složenih uzoraka. Uvjeti pripreme uzorka i parametri analize optimizirani su za specifičan uzorak.'
        }
      </p>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of total human serum/plasma N-glycans'
                : 'Analiza ukupnih N-glikana humanog seruma/plazme'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_total_human_serum.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of total human IgG N-glycans'
                : 'Analiza ukupnih N-glikana humanog IgG'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_total_human_igg_n-glycans.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of total human IgA N-glycans'
                : 'Analiza ukupnih N-glikana humanog IgA'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_total_human_iga_n-glycans.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of subclass-specific human IgG N-glycopeptides'
                : 'Analiza podtip-specifičnih N-glikopeptida humanog IgG'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_human_igg_n-glycopeptides.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of human AGP N-glycopeptides'
                : 'Analiza N-glikopeptida humanog AGP'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_human_agp_n-glycopeptides.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of human C3 N-glycopeptides'
                : 'Analiza N-glikopeptida humanog C3'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_human_c3_n-glycopeptides.jpg" alt="">
        </span>
      </label>
      <label class="dropdown-container">
        <input class="dropdown-checkbox" type="checkbox">
        <span class="dropdown-header">
          <span class="dropdown-arrow">
            <img src="/icons/arrow_dropdown.svg" alt="">
          </span>
          <span class="dropdown-label">
            {
              $language === 'en'
                ? 'Analysis of subclass-specific rodent IgG N-glycopeptides'
                : 'Analiza podtip-specifičnih N-glikopeptida IgG glodavaca'
            }
          </span>
        </span>
        <span class="dropdown-content">
          <img src="/images/glycoprofiling/analysis_of_rodent_igg_n-glycopeptides.jpg" alt="">
        </span>
      </label>
    </div>
    <div class="services-segment">
      <h4 id="1.5.">1.5. {$language === 'en' ? 'Data analysis' : 'Analiza podataka'}</h4>
      <p>
        {
          $language === 'en'
            ? 'Data analysis is an important aspect of the workflow that we provide for our partners and collaborators. Since pure numbers, without thoughtful and meaningful explanation, are usually of little interest, Genos offers a wide range of statistical techniques from basic experimental methods of normalization or batch correction to standard topics like statistical inference or machine/statistical learning.'
            : 'Analiza podataka važan je aspekt radnog toka koji pružamo našim partnerima i suradnicima. Budući da su čisti brojevi, bez promišljenog i smislenog objašnjenja, obično od malog interesa, Genos nudi širok raspon statističkih tehnika, od osnovnih eksperimentalnih metoda normalizacije ili korekcije serija do standardnih tema kao što su statistički zaključci ili strojno/statističko učenje.\n'
        }
      </p>
    </div>
    <div class="services-segment">
      <h4 id="1.6.">1.6. {$language === 'en' ? 'Study design' : 'Dizajn studije'}</h4>
      <p>
        {
          $language === 'en'
            ? 'Genos offers consultancies in study design, under the full or partial control of the experiment, for different fields of biomedicine. The mixture of expertise from Genos employees (biologists, pharmacist, biotechnologists, chemists, chemical engineers and statisticians ) ensures the quality of the study design.'
            : 'Genos nudi konzultacije u dizajnu studija, uz potpuni ili djelomični nadzor nad eksperimentom, za različita područja biomedicine. Mješavina stručnosti zaposlenika Genosa (biologa, farmaceuta, kemičara, statističara i matematičara) jamči kvalitetu dizajna studije./statističko učenje.'
        }
      </p>
    </div>
    <div class="services-segment">
      <h4 id="1.7.">1.7. {$language === 'en' ? 'Cooperation and joint project development' : 'Suradnja i zajednički razvoj projekata'}</h4>
      <p>
        {@html
          $language === 'en'
            ? 'Genos is an active research organization. On the basis of the recommendation of the National Science Council, the Ministry of Science, Education and Sports of the Republic of Croatia issued a permit that allowed Genos to formally register as a research organization in 2007. Genos has participated in six FP7 projects, five Horizon2020 projects and is currently active in eight Horizon Europe projects.<br><br>We are constantly in search of potential collaborative projects where we can contribute with our expertise in high-throughput glycomics and extensive experience of participation in large research consortia.'
            : 'Genos je aktivna istraživačka organizacija. Na temelju preporuke Nacionalnog vijeća za znanost, Ministarstvo znanosti, obrazovanja i sporta Republike Hrvatske izdalo je dozvolu kojom je Genos 2007. godine službeno registriran kao istraživačka organizacija. Genos je sudjelovao u šest FP7 projekata, pet Horizon2020 projekata i trenutno je aktivan u osam projekata programa Horizon Europe.<br><br>Stalno tražimo potencijalne suradničke projekte u kojima možemo doprinijeti svojim stručnim znanjem iz područja visokoprotočne glikomike i bogatim iskustvom sudjelovanja u velikim istraživačkim konzorcijima.'
        }
      </p>
    </div>
    <hr>
    <div class="services-segment">
      <h3 id="2.0.">2. {$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</h3>
      <img src="/illustrations/epigenetics.jpg" alt="" class="w-full">
      <h4 id="2.1.">2.1. {$language === 'en' ? 'Technologies' : 'Tehnologije'}</h4>
      <ul>
        <li>{$language === 'en' ? 'Epigenetics analyses' : 'Epigenetske analize'}</li>
        <li>{$language === 'en' ? 'Cell culture' : 'Stanična kultura'}</li>
      </ul>
      <h5>{$language === 'en' ? 'Equipment for specific epigenetic analyses:' : 'Oprema za specifične epigenetske analize:'}</h5>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Epigenetics Pyrosequencers PyroMark Q24 Advanced (Qiagen) for DNA methylation analyses'
              : 'Pirosekvenceri PyroMark Q24 Advanced (Qiagen) za analize metilacije DNK-a'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'A sonicator Sonopuls mini20 for cells distruption'
              : 'Sonikator Sonopuls mini20 za razgradnju stanica'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Bioruptor Plus sonication device for chromatin Fragmentation'
              : 'Uređaj za sonikaciju Bioruptor Plus za fragmentaciju kromatina'
          }
        </li>
      </ul>
      <h5>{$language === 'en' ? 'Equipment for cell culture work:' : 'Oprema za rad sa staničnim kulturama:'}</h5>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Two Panasonic CO2 incubators'
              : 'Dva CO2 inkubatora Panasonic'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Brunswick S41i CO2 Incubator Shaker'
              : 'CO2 inkubator s tresilicom Brunswick S41i'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Three class II safety cabinets'
              : 'Tri sigurnosna kabineta klase II'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Nucleofector for electroporation of animal cells in culture'
              : 'Nucleofector za elektroporaciju životinjskih stanica u kulturi'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Laboratory BSL2+ for lentiviral production with equipment'
              : 'Laboratorij BSL2+ za proizvodnju lentivirusa s pripadajućom opremom'
          }
        </li>
      </ul>
    </div>
    <div class="services-segment">
      <h4 id="2.2.">2.2. {$language === 'en' ? 'Services' : 'Usluge'}</h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Analysis of DNA methylation by pyrosequencing'
              : 'Analiza metilacije DNK pomoću pirosekvenciranja'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'High-throughput gene expression analysis'
              : 'Visokoprotočna analiza genske ekspresije'

          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Custom purpose design and production of CRISPR/dCas9-based molecular tools'
              : 'Dizajn i proizvodnja molekularnih alata temeljenih na CRISPR/dCas9 tehnologiji za specifične namjene'
          }
        </li>
      </ul>
    </div>
    <hr>
    <div class="services-segment">
      <h3 id="3.0.">3. {$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}</h3>
      <img src="/illustrations/dna.jpg" alt="" class="w-full">
      <h4 id="3.1.">3.1. {$language === 'en' ? 'Paternity testing' : 'Utvrđivanje očinstva'}</h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Personal Paternity Test – Analysis of 18 or 24 STR markers'
              : 'Osobni test očinstva – Analiza 18 ili 24 STR biljega\n' +
              '\n'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Legal Paternity Test – Analysis of 24 STR markers for court proceedings'
              : 'Pravni test očinstva – Analiza 24 STR biljega za sudske postupke'
          }
        </li>
      </ul>
      <p>
        {@html
          $language === 'en'
            ? 'DNA analysis results serve as crucial evidence in numerous civil and criminal cases. While DNA analysis can definitively determine the identity of an individual or biological traces, correct interpretation of laboratory results requires significant expertise and experience.<br><br>Genos d.o.o. was the first private laboratory in Croatia authorized to perform forensic DNA analysis, a distinction recognized by our clients as an added value, fostering trust in the reliability of our results.<br><br>Our team includes a full-time court expert with extensive experience in DNA analysis, along with collaborations with other court experts in Croatia. Our experts were part of the national team that conducted victim identifications from the Homeland War under the Ministry of Family, Veterans, and Intergenerational Solidarity.<br><br>Unlike companies that outsource DNA sample testing, we handle all analyses in our laboratory in Zagreb.'
            : 'Rezultati analize DNK predstavljaju ključni dokaz u brojnim građanskim i kaznenim postupcima. Iako DNK analiza može nedvojbeno utvrditi identitet osobe ili biološkog traga, pravilna interpretacija laboratorijskih rezultata zahtijeva značajnu stručnost i iskustvo.<br><br>Genos d.o.o. bio je prvi privatni laboratorij u Hrvatskoj ovlašten za provedbu forenzičkih DNK analiza, a to priznanje naši klijenti prepoznaju kao dodatnu vrijednost koja doprinosi povjerenju u pouzdanost naših rezultata.<br><br>Naš tim uključuje stalnog sudskog vještaka s bogatim iskustvom u DNK analizama te surađuje i s drugim sudskim vještacima u Hrvatskoj. Naši su stručnjaci bili dio nacionalnog tima za identifikaciju žrtava Domovinskog rata pod okriljem Ministarstva obitelji, branitelja i međugeneracijske solidarnosti.<br><br>Za razliku od tvrtki koje testiranje DNK uzoraka povjeravaju vanjskim partnerima, sve analize provodimo u vlastitom laboratoriju u Zagrebu.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Paternity/Maternity Testing for Personal Purposes'
            : 'Testiranje očinstva/majčinstva u osobne svrhe'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'For personal paternity/maternity testing, comparing the DNA profiles of one parent and the child is sufficient. We analyze 16 or 24 STR markers (loci), which are internationally recognized as sufficiently discriminatory, providing a probability of biological parenthood greater than 99.99%.<br><br>For higher paternity accuracy, we recommend including the mother\'s sample in the analysis. When standard samples from the presumed father, child, and mother are tested, the mother\'s sample is analyzed free of charge.<br><br>After obtaining and comparing DNA profiles, for paternity testing, mandatory alleles are identified to determine if the presumed father carries the required alleles. A mandatory allele is one inherited from the biological parent.<br><br>If the analysis shows a mismatch in at least three mandatory alleles between the child and the presumed father, it is conclusive that the presumed father is not the biological father of the child. In cases of a mismatch in one or two molecular markers, mutations (which are relatively common) can be considered. In such cases, it is recommended to include the mother\'s sample in the analysis or test additional genetic markers. If desired or needed, Genos can perform an analysis of 24 markers for an additional fee.'
            : 'Za osobno testiranje očinstva/majčinstva dovoljno je usporediti DNK profile jednog roditelja i djeteta. Analiziramo 16 ili 24 STR biljega (lokus), koji su međunarodno priznati kao dovoljno diskriminirajući i omogućuju određivanje vjerojatnosti biološkog roditeljstva veću od 99,99%.<br><br>Za veću točnost u utvrđivanju očinstva preporučujemo uključivanje uzorka majke u analizu. Kada se analiziraju standardni uzorci pretpostavljenog oca, djeteta i majke, uzorak majke se analizira bez dodatne naknade.<br><br>Nakon dobivanja i usporedbe DNK profila, u testiranju očinstva identificiraju se obvezni aleli kako bi se utvrdilo nosi li pretpostavljeni otac tražene alele. Obvezni alel je onaj koji je naslijeđen od biološkog roditelja.<br><br>Ako analiza pokaže nepodudaranje u najmanje tri obvezna alela između djeteta i pretpostavljenog oca, sa sigurnošću se može isključiti da je pretpostavljeni otac biološki otac djeteta. U slučajevima nepodudaranja u jednom ili dva molekularna biljega, moguće je uzeti u obzir mutacije (koje su relativno česte). U takvim slučajevima preporučuje se uključivanje uzorka majke u analizu ili testiranje dodatnih genetskih biljega. Ako je potrebno ili željeno, Genos može provesti analizu 24 biljega uz dodatnu naknadu.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Paternity/Maternity Testing for Legal Proceedings'
            : 'Testiranje očinstva/majčinstva za pravne postupke'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Paternity/maternity testing for legal proceedings is conducted based on a court order, by comparing the genotypes of the mother, child, and presumed father. As a certified court expert, Genos d.o.o. performs paternity testing at the request of individuals, and the findings and opinions of our authorized expert are valid as evidence in court. This helps avoid unnecessary costs of double testing (once for personal purposes and once for legal proceedings).<br><br>The probability values for paternity in legal cases range from one in several million to one in several billion. The minimum threshold required for conclusive paternity determination in court is 99.999%.'
            : 'Testiranje očinstva/majčinstva za pravne postupke provodi se na temelju sudskog naloga, usporedbom genotipova majke, djeteta i pretpostavljenog oca. Kao certificirani sudski vještak, Genos d.o.o. provodi testiranje očinstva na zahtjev pojedinaca, a nalazi i mišljenja našeg ovlaštenog vještaka imaju dokaznu snagu na sudu. To pomaže u izbjegavanju nepotrebnih troškova dvostrukog testiranja (jednom za osobne potrebe, a jednom za pravne postupke).<br><br>Vjerojatnost očinstva u pravnim slučajevima kreće se od jednog na nekoliko milijuna do jednog na nekoliko milijardi. Minimalni prag koji je potreban za zaključivanje očinstva na sudu je 99,999%.'
        }
      </p>
      <h4 id="3.2.">
        3.2. {$language === 'en' ? 'Kinship testing' : 'Testiranje srodstva'}
      </h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Male Lineage Testing – Analysis of 23 STR markers on the Y chromosome'
              : 'Testiranje muške loze – Analiza 23 STR biljega na Y kromosomu'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Sibling and Half-Sibling Testing – Analysis of 24 STR markers'
              : 'Testiranje braće i sestara – Analiza 24 STR biljega'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Grandparent-Grandchild Testing – Analysis of 24 STR markers'
              : 'Testiranje djed-unuče – Analiza 24 STR biljega'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Paternity Testing Through the Male Line'
            : 'Testiranje očinstva kroz mušku lozu'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Paternity testing through the male line is conducted by analyzing 23 STR markers on the Y chromosome. Since the sex chromosome is inherited unchanged, kinship is confirmed by a complete match of all the analyzed Y STR markers. Any changes that might occur are mutations, which are random nucleotide substitutions that happen spontaneously and very rarely.<br><br>The Y chromosome is inherited through the male line, passed directly from father to son. Therefore, all male relatives on the paternal side share the same markers on the Y chromosome, meaning they have an identical Y DNA profile. This method is useful in indirect paternity testing for male children when a male relative on the paternal side (brother, grandfather, uncle, or any male family member) can substitute for the deceased alleged father. It can also be applied for proving kinship between brothers, grandfather and grandson, uncle and nephew, etc. The test is also used in male identification cases when only paternal relatives are available.<br><br>Y chromosome testing is valuable in the following cases:'
            : 'Testiranje očinstva kroz mušku lozu provodi se analizom 23 STR biljega na Y kromosomu. Budući da se spolni kromosom nasljeđuje nepromijenjen, srodstvo se potvrđuje potpunim podudaranjem svih analiziranih Y STR biljega. Svaka promjena koja bi se mogla dogoditi su mutacije, koje su nasumične zamjene nukleotida koje se spontano javljaju i vrlo rijetko.<br><br>Y kromosom se nasljeđuje kroz mušku lozu, prenosi se izravno s oca na sina. Stoga svi muški rođaci s očeve strane dijele iste markere na Y kromosomu, što znači da imaju identičan Y DNK profil. Ova metoda korisna je u neizravnom testiranju očinstva za mušku djecu kada muški rođak s očeve strane (brat, djed, ujak ili bilo koji muški član obitelji) može zamijeniti preminulog navodnog oca. Također se može primijeniti za dokazivanje srodstva između braće, djeda i unuka, ujaka i nećaka itd. Test se također koristi u slučajevima identifikacije muškaraca kada su dostupni samo rođaci s očeve strane.<br><br>Testiranje Y kromosoma je vrijedno u sljedećim slučajevima:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'When brothers want to confirm they share the same biological father'
              : 'Kada braća žele potvrditi da dijele istog biološkog oca'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'When adopted male children seek to find their biological father or other male relatives'
              : 'Kada posvojena muška djeca žele pronaći svog biološkog oca ili druge muške rođake'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'When official proof of kinship is required between males, such as in legal disputes or immigration cases.'
              : 'Kada je potrebno službeno dokazivanje srodstva između muškaraca, kao što je u pravnim sporovima ili imigracijskim slučajevima.'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Sibling and Half-Sibling Testing'
            : 'Testiranje braće i sestara'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Kinship testing for first-generation relationships between potential siblings and half-siblings is conducted by analyzing 24 STR markers. The test is used when the presumed father is unavailable for testing, and potential brothers or sisters, or half-siblings, want to confirm if they share the same father.<br><br>There are two types of tests:'
            : 'Testiranje srodstva za prve generacije odnosa između potencijalnih braće i sestara ili polubraće i polusestre provodi se analizom 24 STR biljega. Test se koristi kada pretpostavljeni otac nije dostupan za testiranje, a potencijalni braća ili sestre, ili polubraća i polusestre, žele potvrditi ako dijele istog oca.<br><br>Postoje dva tipa testova:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Full-Sibling Test – To confirm if two individuals share the same biological parents'
              : 'Test braće i sestara – Za potvrdu da li dvoje pojedinaca dijele iste biološke roditelje'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Half-Sibling Test – To confirm if two individuals share one biological parent.'
              : 'Test polubraće i polusestre – Za potvrdu da li dvoje pojedinaca dijele jednog biološkog roditelja.'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Grandparent-Grandchild Testing'
            : 'Testiranje djeda-unuče'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'Grandparent-grandchild testing is performed by analyzing 24 STR markers and is conducted when the presumed father is unavailable for testing. The test confirms whether the child is biologically related to the grandparents, thus aiding in identifying the biological father. This test can also assist in confirming maternity.'
            : 'Testiranje djeda-unuče provodi se analizom 24 STR biljega i koristi se kada pretpostavljeni otac nije dostupan za testiranje. Test potvrđuje je li dijete biološki povezano s djedom i bakom, čime pomaže u identificiranju biološkog oca. Ovaj test također može pomoći u potvrđivanju majčinstva.'
        }
      </p>
      <h4 id="3.3.">3.3.
        {
          $language === 'en'
            ? 'Non-Invasive Prenatal Gender and Paternity Testing'
            : 'Neinvazivno prenatalno testiranje spola i očinstva'
        }
      </h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Analysis of free fetal DNA from the mother’s blood using 23 Y STR markers'
              : 'Analiza slobodne fetalne DNK iz majčine krvi pomoću 23 Y STR biljega'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Prenatal Gender Determination and Paternity Testing'
            : 'Prenatalno određivanje spola i testiranje očinstva'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'The sex of a baby is usually determined via ultrasound. However, in cases where this is not possible, prenatal gender determination can be performed through a DNA test.<br><br>This test analyzes free fetal DNA present in the mother’s blood by detecting Y STR markers. Since the Y chromosome is unique to males, the presence of a Y chromosome confirms that the fetus is male. If no Y chromosome is detected, the fetus is female.<br><br>Genos DNA Laboratory researchers, in collaboration with other scientific institutions, were among the first to publish findings on prenatal gender determination in the prestigious journal Prenatal Diagnosis in 2008.<br><br>Paternity testing before birth is only possible if the fetus is male. The fetal Y DNA profile is compared to the Y DNA profile of the potential father to determine if they match.<br><br>However, prenatal paternity testing is not possible if the potential fathers are close male relatives (e.g., brothers or father and son) since they share an identical Y chromosome. Due to this limitation, it is recommended to test all potential fathers and confirm paternity with a standard DNA test after birth. This analysis can only determine whether a potential father can be the biological father but cannot definitively confirm paternity—it can only exclude a man as the biological father.<br><br>Testing is available from the 14th week of pregnancy. An appointment must be scheduled in advance, and the expectant mother must bring her pregnancy record book. The test requires 9 ml of the mother’s venous blood and a buccal swab from the potential father. The blood draw is completely safe for the fetus.'
            : 'Spol djeteta najčešće se određuje ultrazvukom. Međutim, u slučajevima kada to nije moguće, spol se može odrediti prenatalnim DNK testom. Ovaj test analizira slobodnu fetalnu DNK prisutnu u krvi majke detekcijom Y STR biljega. Budući da je Y kromosom specifičan za muškarce, prisutnost Y kromosoma potvrđuje da je fetus muškog spola. Ako Y kromosom nije detektiran, fetus je ženskog spola.<br><br>Istraživači iz Genos DNA laboratorija, u suradnji s drugim znanstvenim institucijama, bili su među prvima koji su 2008. godine objavili rezultate istraživanja o prenatalnom određivanju spola u prestižnom časopisu Prenatal Diagnosis.<br><br>Testiranje očinstva prije rođenja moguće je samo ako je fetus muškog spola. Fetalni Y DNK profil uspoređuje se s Y DNK profilom potencijalnog oca kako bi se utvrdilo podudaranje. Međutim, prenatalno testiranje očinstva nije moguće ako su potencijalni očevi bliski muški rođaci (npr. braća ili otac i sin) jer dijele identičan Y kromosom. Zbog tog ograničenja preporučuje se testiranje svih potencijalnih očeva te naknadna potvrda očinstva standardnim DNK testom nakon rođenja. Ova analiza može isključiti muškarca kao biološkog oca, ali ne može s apsolutnom sigurnošću potvrditi očinstvo.<br><br>Testiranje je moguće od 14. tjedna trudnoće. Potrebno je prethodno dogovoriti termin, a trudnica na pregled mora donijeti trudničku knjižicu. Test zahtijeva uzimanje 9 ml venske krvi trudnice te obrisak usne sluznice potencijalnog oca. Uzimanje uzorka potpuno je sigurno za fetus.'
        }
      </p>
      <h4 id="3.4.">
        3.4.
        {
          $language === 'en'
            ? 'Other analyses'
            : 'Ostale analize'
        }
      </h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'DNA Profiling – Analysis of 24 STR markers'
              : 'DNK Profiliranje – Analiza 24 STR markera'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Detection of Seminal Fluid Traces'
              : 'Detekcija tragova sjemene tekućine'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'DNA Isolation'
              : 'Izolacija DNK'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'DNA Profiling'
            : 'DNK Profiliranje'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'DNA profiling is often requested to verify an existing DNA profile, confirm the authenticity of previous test results, or supplement earlier paternity or kinship tests. A DNA profile serves as genetic identification and can be used in various cases, such as:'
            : 'DNK profiliranje često se traži kako bi se verificirao postojeći DNK profil, potvrdila autentičnost prethodnih rezultata testiranja ili dopunili raniji testovi očinstva ili srodstva. DNK profil služi kao genetska identifikacija i može se koristiti u različitim slučajevima, poput:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Establishing or disputing inheritance rights'
              : 'Utvrđivanje ili osporavanje prava na nasljedstvo'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Resolving cases of missing or abducted children'
              : 'Rješavanje slučajeva nestale ili otete djece'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Immigration disputes'
              : 'Imigracijski sporovi'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'For individuals in high-risk professions'
              : 'Za osobe u visokorizičnim profesijama'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Insurance purposes'
              : 'Za potrebe osiguranja'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Identifying victims of natural disasters, accidents, or terrorist attacks'
              : 'Identifikacija žrtava prirodnih katastrofa, nesreća ili terorističkih napada'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Investigating potential sample mix-ups (e.g., verifying preserved tissue samples in cancer diagnoses or ensuring proper handling of reproductive cells in IVF procedures)'
              : 'Istraga potencijalnih zamjena uzoraka (npr. provjera sačuvanih uzoraka tkiva u dijagnozama raka ili osiguranje pravilnog rukovanja reproduktivnim stanicama u IVF postupcima)'
          }
        </li>
      </ul>
      <p>
        {
          $language === 'en'
            ? 'DNA profiling is performed by analyzing 24 STR loci.'
            : 'DNK profiliranje se izvodi analizom 24 STR lokusa.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Detection of Semen Traces'
            : 'Detekcija tragova sjemena'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'The presence of semen traces on various samples (e.g., clothing, bedding, towels, vaginal swabs) is determined using the RSID™-Semen test (Rapid Stain Identification of Human Semen; Independent Forensics, USA). This test detects the presence of human semenogelin protein via an immunochromatographic strip assay using two anti-semenogelin monoclonal antibodies.'
            : 'Prisutnost tragova sjemena na različitim uzorcima (npr. odjeća, posteljina, ručnici, vaginalni brisevi) utvrđuje se korištenjem RSID™-Semen testa (Brza identifikacija mrlja ljudskog sjemena; Independent Forensics, SAD). Ovaj test detektira prisutnost ljudskog semenogelin proteina putem imunokromatografske trake koristeći dva monoklonska antitijela na semenogelin.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'DNA Isolation'
            : 'Izolacija DNK'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'DNA isolation is typically performed upon request when the DNA sample is needed for molecular diagnostic tests, which are essential for personalized medicine. These tests may include:'
            : 'Izolacija DNK obično se izvodi na zahtjev kada je uzorak DNK potreban za molekularne dijagnostičke testove, koji su ključni za personaliziranu medicinu. Ovi testovi mogu uključivati:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Assessing genetic predisposition to certain diseases or disorders to enable early prevention and targeted treatment'
              : 'Procjena genetske predispozicije za određene bolesti ili poremećaje radi omogućavanja rane prevencije i ciljanog liječenja'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Evaluating treatment outcomes to improve drug efficacy and reduce ineffective treatments (pharmacogenetics)'
              : 'Procjena ishoda liječenja za poboljšanje učinkovitosti lijekova i smanjenje neučinkovitih tretmana (farmakogenetika)'
          }
        </li>
      </ul>
      <p>
        {@html
          $language === 'en'
            ? 'Since some of these analyses are not available in Croatia, the isolated DNA sample is often sent abroad for testing.<br><br>For DNA isolation, a 3 mL whole blood sample is required in a vacutainer tube with EDTA anticoagulant (purple cap). The sample should ideally be delivered immediately after collection. If necessary, it can be stored at +4°C for a few hours or at -20°C for longer periods.'
            : 'Budući da neki od ovih testova nisu dostupni u Hrvatskoj, izolirani DNK uzorak često se šalje u inozemstvo na testiranje.<br><br>Za izolaciju DNK potreban je uzorak cijele krvi od 3 mL u vacutainer cijevi s EDTA antikoagulantom (ljubičasti čep). Uzorak bi trebao biti dostavljen odmah nakon uzimanja. Ako je potrebno, može se čuvati na +4°C nekoliko sati ili na -20°C dulje vrijeme.'
        }
      </p>
      <h4 id="3.5.">
        3.5.
        {
          $language === 'en'
            ? 'Avian Gender Determination via DNA Analysis'
            : 'Određivanje spola ptica putem DNK analize'
        }
      </h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Analysis of bird sex chromosomes to differentiate male and female birds'
              : 'Analiza spolnih kromosoma ptica za razlikovanje mužjaka i ženki ptica'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Avian Gender Determination'
            : 'Određivanje spola ptica'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'The sex of many bird species cannot be determined based on physical appearance and characteristics. By using DNA analysis methods, it is possible to examine parts of the birds\' sex chromosomes. This allows us to distinguish between male birds (ZZ) and female birds (ZW).'
            : 'Spol mnogih vrsta ptica ne može se odrediti na temelju fizičkog izgleda i karakteristika. Korištenjem metoda DNK analize moguće je ispitati dijelove spolnih kromosoma ptica. To nam omogućava razlikovanje mužjaka ptica (ZZ) i ženki ptica (ZW).'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Advantages of DNA Analysis'
            : 'Prednosti DNK analize'
        }
      </h5>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'The sex of a bird can be determined from feather or blood samples.'
              : 'Spol ptice može se odrediti iz uzoraka perja ili krvi.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'The accuracy of DNA-based sex determination does not depend on the bird\'s age.'
              : 'Točnost određivanja spola na temelju DNK-a ne ovisi o dobi ptice.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'The accuracy of DNA sex determination is very high (>99%).'
              : 'Točnost određivanja spola na temelju DNK-a je vrlo visoka (>99%).'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Knowing the bird\'s sex increases its value.'
              : 'Poznavanje spola ptice povećava njezinu vrijednost.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'The analysis is conducted by experts with years of experience in DNA analysis.'
              : 'Analizu provode stručnjaci s godinama iskustva u DNK analizi.'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Sample Collection'
            : 'Prikupljanje uzoraka'
        }
      </h5>
      <ul>
        <li>
          {
            $language === 'en'
              ? '3–5 freshly plucked feathers, preferably from the bird\'s chest (collect without touching the tip of the feather with your hands).'
              : '3–5 svježe iščupanih pera, po mogućstvu s ptičje grudi (prikupljati bez dodirivanja vrha pera rukama).'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? '2–3 drops of blood on a card or tissue (sample collection cards for blood can be requested from the Genos DNA laboratory).'
              : '2–3 kapi krvi na kartici ili maramici (kartice za prikupljanje krvi mogu se zatražiti od Genos DNA laboratorija).'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Each bird\'s sample should be placed in a separate envelope.'
              : 'Uzorke svake ptice treba staviti u zasebnu omotnicu.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Samples can be sent by mail or delivered in person.'
              : 'Uzorke možete poslati poštom ili donijeti osobno.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'When sending samples by mail, include an order form and proof of payment for the analysis.'
              : 'Prilikom slanja uzoraka poštom, priložite obrazac narudžbe i dokaz o uplati za analizu.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Instructions for Collecting Feather and Blood Samples'
              : 'Upute za prikupljanje uzoraka perja i krvi'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Results'
            : 'Rezultati'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'The average time for sex determination is 5–10 business days.'
            : 'Prosječno vrijeme za određivanje spola je 5–10 radnih dana.'
        }
      </p>
      <p>
        {
          $language === 'en'
            ? 'Results can be sent by mail or email.'
            : 'Rezultati mogu biti poslani poštom ili e-mailom.'
        }
      </p>
      <h4 id="3.6.">
        3.6.
        {
          $language === 'en'
            ? 'Testing Procedure'
            : 'Postupak testiranja'
        }
      </h4>
      <p>
        {
          $language === 'en'
            ? 'Analysis of bird sex chromosomes to differentiate male and female birds'
            : 'Analiza spolnih kromosoma ptica za razlikovanje mužjaka i ženki'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'How Is Testing Conducted?'
            : 'Kako se provodi testiranje?'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'At the Genos DNA laboratory, paternity/kinship determination through DNA analysis is conducted quickly and painlessly by collecting buccal swab samples (swabbing the inner cheek lining). Blood sampling is not required.<br><br>Fasting before sample collection is not necessary. However, an appointment must be scheduled before visiting the laboratory!<br><br>Sample collection can be performed at our laboratory in Zagreb (Borongajska cesta 83 H, 1st floor, BIOCenter building, within the Borongaj Science and Education Campus), or at our office in Osijek (Drniška 9).<br><br>For sample collection from minors, the presence of both parents or guardians is required, or a written and notarized consent from the absent parent/guardian.'
            : 'U Genos DNA laboratoriju, određivanje očinstva/rodbinskih odnosa putem DNK analize provodi se brzo i bezbolno prikupljanjem uzoraka brisa iz usne šupljine (brisanjem unutrašnjeg dijela obraza). Uzorkovanje krvi nije potrebno.<br><br>Postenje prije prikupljanja uzoraka nije potrebno. Međutim, potrebno je unaprijed zakazati termin za posjetu laboratoriju!<br><br>Prikupljanje uzoraka može se obaviti u našem laboratoriju u Zagrebu (Borongajska cesta 83 H, 1. kat, zgrada BIOCentra, unutar kampusa Borongaj), ili u našoj poslovnici u Osijeku (Drniška 9).<br><br>Za prikupljanje uzoraka od maloljetnika, prisutnost oba roditelja ili staratelja je obavezna, ili pisana i ovjerena suglasnost odsutnog roditelja/staratelja.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'There is no age restriction for paternity determination.'
            : 'Nema starosne granice za određivanje očinstva.'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'If testing is requested for personal use in legal proceedings, an appointment must be scheduled in advance. All parties must attend the sample collection together at the agreed time. For identification, they must bring a valid ID card or another valid photo document (which includes a personal identification number - OIB), and for a child, a birth certificate and an ID card (if available). The child\'s identity must be confirmed by all parties in the process by signing the order form.<br><br>If paternity testing is conducted at the court’s request, an authorized Genos representative can collect the samples at the court during the hearing or at the Genos premises based on a court order.<br><br>You can also collect samples yourself in the privacy of your home using the **DNA Sample Collection Kit**.'
            : 'Ako se testiranje zahtijeva za osobnu uporabu u pravnim postupcima, potrebno je unaprijed zakazati termin. Sve strane moraju prisustvovati prikupljanju uzoraka zajedno u dogovoreno vrijeme. Za identifikaciju moraju donijeti važeću osobnu iskaznicu ili drugi važeći foto-dokument (koji uključuje osobni identifikacijski broj - OIB), a za dijete, rodni list i osobnu iskaznicu (ako je dostupna). Identitet djeteta mora potvrditi sve strane u procesu potpisivanjem obrasca za narudžbu.<br><br>Ako se testiranje očinstva provodi na zahtjev suda, ovlašteni predstavnik Genosa može prikupiti uzorke na sudu tijekom saslušanja ili u prostorijama Genosa na temelju sudskog naloga.<br><br>Uzorke možete također prikupiti sami u privatnosti svog doma koristeći **DNA Sample Collection Kit**.'
        }
      </p>
      <h5>
        {@html
          $language === 'en'
            ? 'Results Available in the Shortest Possible Time!'
            : 'Rezultati dostupni u najkraćem mogućem vremenu!'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'For personal paternity/kinship testing, the standard timeframe for analysis completion and result delivery is **7 working days** from the date of payment and sample receipt at the laboratory. For urgent testing, results are available within **4 working days** (subject to an additional fee).<br><br>For court-ordered testing, the timeframe for completing the analysis and delivering the expert report is **10 working days**.<br><br>The test results are delivered exclusively to the Client or the person specified by the Client in the signed order form (in person, via email, or by mail).'
            : 'Za osobno testiranje očinstva/rodbinske veze, standardni rok za dovršetak analize i dostavu rezultata je 7 radnih dana od dana plaćanja i primitka uzorka u laboratorij. Za hitno testiranje, rezultati su dostupni unutar 4 radna dana (uz dodatnu naknadu).<br><br>Za testiranje na zahtjev suda, rok za dovršetak analize i dostavu izvještaja vještaka je 10 radnih dana.<br><br>Rezultati testa dostavljaju se isključivo Klijentu ili osobi koju je Klijent naveo u potpisanom obrascu narudžbe (osobno, putem e-maila ili poštom).'
        }
      </p>
      <ul>
        <li>
          {#if $language === 'en'}
            Download: <a href="/pdfs/price-list.pdf" target="_blank" class="underline">Price List</a>
          {:else}
            Preuzmi: <a href="/pdfs/cjenik.pdf" target="_blank" class="underline">Cjenik usluga</a>
          {/if}
        </li>
      </ul>
      <h4 id="3.7.">
        {
          $language === 'en'
            ? '3.7. Data Confidentiality'
            : '3.7. Povjerljivost podataka'
        }
      </h4>
      <p>
        {@html
          $language === 'en'
            ? 'All DNA test results are strictly confidential. Biological samples submitted for DNA analysis are destroyed after testing, and all digital records are deleted 5 years after results are issued. Within this period, a copy of the issued results can be requested only by the original client through a written request.<br><br>The Genos d.o.o. DNA laboratory uses cutting-edge DNA analysis methods to provide accurate answers to all inquiries. However, in some cases, results may not align with expectations, which can have emotional and social consequences. Genos d.o.o. is not authorized to provide psychological counseling and cannot offer direct support in such situations.<br><br>If DNA test results cause emotional distress such as dissatisfaction, anger, fear, sadness, or concern, we strongly recommend seeking professional support from one of the organizations listed below, a family doctor, or a psychologist at the relevant social services center.<br><br>Psychological Center TESA, tel. 01 48 28 888 / <a href="https://www.tesa.hr" target="_blank" class="underline">www.tesa.hr</a><br>Society for Psychological Help, MODUS – Center for Children, Youth, and Families, tel. 01 4621 554 / <a href="https://www.dpp.hr" target="_blank" class="underline">www.dpp.hr</a>'
            : 'Svi rezultati DNA testova su strogo povjerljivi. Biološki uzorci dostavljeni na DNA analizu uništavaju se nakon testiranja, a svi digitalni zapisi brišu se 5 godina nakon izdavanja rezultata. U tom razdoblju kopiju izdanih rezultata može zatražiti isključivo izvorni naručitelj putem pisanog zahtjeva.<br><br>DNA laboratorij Genos d.o.o. koristi najnaprednije metode DNA analize kako bi pružio točne odgovore na sve upite. Međutim, u nekim slučajevima rezultati možda neće odgovarati očekivanjima, što može imati emocionalne i društvene posljedice. Genos d.o.o. nije ovlašten pružati psihološko savjetovanje i ne može ponuditi izravnu podršku u takvim situacijama.<br><br>Ako rezultati DNA testa izazovu emocionalnu nelagodu poput nezadovoljstva, ljutnje, straha, tuge ili zabrinutosti, preporučujemo da potražite stručnu pomoć kod neke od dolje navedenih organizacija, obiteljskog liječnika ili psihologa u nadležnom centru za socijalnu skrb.<br><br>Psihološki centar TESA, tel. 01 48 28 888 / <a href="https://www.tesa.hr" target="_blank" class="underline">www.tesa.hr</a><br>Društvo za psihološku pomoć, MODUS – Centar za djecu, mlade i obitelj, tel. 01 4621 554 / <a href="https://www.dpp.hr" target="_blank" class="underline">www.dpp.hr</a>'
        }
      </p>
    </div>
  </div>
</div>
