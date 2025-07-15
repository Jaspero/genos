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
          ? 'Genos unites expertise in glycomics, glycoproteomics, epigenetics, and DNA analysis to deliver integrated, high-quality solutions for diverse research and commercial applications.'
          : 'Genos objedinjuje stručnost u glikomici, glikoproteomici, epigenetici i analizi DNA kako bi pružio integrirana, visokokvalitetna rješenja za raznolike istraživačke i komercijalne primjene.'
      }
    </h2>
  </div>
  <div class="gc-xs-12 gc-3 sticky">
    <p>
      {
        $language === 'en'
          ? 'Quick links:'
          : 'Izbornik:'
      }
    </p>
    <div class="sticky-items">
      <button class="flex text-left" on:click={() => {
          glycomics = !glycomics;
          epigenetics = false;
          forensics = false;
        }}>
        {$language === 'en' ? 'Glycomics & glycoproteomics' : 'Glikomika i glikoproteomika'}
        <img src="/icons/arrow_dropdown.svg" alt="" class:rotate-180={glycomics}>
      </button>
      {#if glycomics}
        <div class="flex flex-col gap-y-1" transition:slide>
          <a href="{$language === 'en' ? '/services#1.0.' : '/usluge#1.0.'}" class="sub-link">
            1. {$language === 'en' ? 'Glycomics & Glycoproteomics' : 'Glikomika i glikoproteomika'}
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
      <button class="flex text-left" on:click={() => {
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
      <button class="flex text-left" on:click={() => {
          glycomics = false;
          epigenetics = false;
          forensics = !forensics;
        }}>
        {$language === 'en' ? 'DNA & Forensics' : 'DNA i Forenzika'}
        <img src="/icons/arrow_dropdown.svg" alt="" class:rotate-180={forensics}>
      </button>
      {#if forensics}
        <div class="flex flex-col gap-y-1" transition:slide>
          <a href="{$language === 'en' ? '/services#3.0.' : '/usluge#3.0.'}" class="sub-link">
            3. {$language === 'en' ? 'DNA & Forensics' : 'DNA i Forenzika'}
          </a>
          <a href="{$language === 'en' ? '/services#3.1.' : '/usluge#3.1.'}" class="sub-link">
            3.1. {$language === 'en' ? 'Paternity testing' : 'Utvrđivanje očinstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.2.' : '/usluge#3.2.'}" class="sub-link">
            3.2. {$language === 'en' ? 'Kinship testing' : 'Utvrđivanje srodstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.3.' : '/usluge#3.3.'}" class="sub-link">
            3.3. {$language === 'en'
            ? 'Non-Invasive Prenatal Gender and Paternity Testing'
            : 'Neinvazivno prenatalno utvrđivanje spola djeteta i testiranje očinstva'}
          </a>
          <a href="{$language === 'en' ? '/services#3.4.' : '/usluge#3.4.'}" class="sub-link">
            3.4. {$language === 'en' ? 'Other analyses' : 'Ostale analize'}
          </a>
          <a href="{$language === 'en' ? '/services#3.5.' : '/usluge#3.5.'}" class="sub-link">
            3.5. {$language === 'en' ? 'Testing Procedure' : 'Postupak testiranja'}
          </a>
          <a href="{$language === 'en' ? '/services#3.5.1.' : '/usluge#3.5.1.'}" class="sub-link">
            3.5.1. {$language === 'en' ? 'Set for DNA sample collection and analysis' : 'Set za izuzimanje uzoraka za analizu DNA'}
          </a>
          <a href="{$language === 'en' ? '/services#3.6.' : '/usluge#3.6.'}" class="sub-link">
            3.6. {$language === 'en' ? 'Data confidentiality' : 'Povjerljivost podataka'}
          </a>
          <a href="{$language === 'en' ? '/services#3.7.' : '/usluge#3.7.'}" class="sub-link">
            3.7. {$language === 'en'
            ? 'Avian Gender Determination via DNA Analysis'
            : 'Određivanje spola ptica DNA analizom'}
          </a>
        </div>
      {/if}
    </div>
  </div>
  <div class="gc-9 gc-xs-12 services-container">
    <h3 id="1.0.">1. {$language === 'en' ? 'Glycomics & Glycoproteomics' : 'Glikomika i glikoproteomika'}</h3>
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
            : '2 Applied Biosystems 3500 DNA sekvencera prilagođena za analizu glikana, visokoprotočno glikoprofiliranje do 300 uzoraka dnevno'
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
              : 'Pirosekvenceri PyroMark Q24 Advanced (Qiagen) za analize metilacije DNA'
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
              : 'Analiza metilacije DNA pomoću pirosekvenciranja'
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
      <h3 id="3.0.">3. {$language === 'en' ? 'DNA & Forensics' : 'DNA i Forenzika'}</h3>
      <img src="/illustrations/dna.jpg" alt="" class="w-full">
      <h4 id="3.1.">3.1. {$language === 'en' ? 'Paternity testing' : 'Utvrđivanje očinstva'}</h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Personal Paternity Test – Analysis of 18 or 24 STR markers'
              : 'Test očinstva za osobne potrebe – Analiza 18 ili 24 STR biljega'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Paternity test for court proceedings – Analysis of 24 STR markers\n'
              : 'Test očinstva za sudske postupke – Analiza 24 STR biljega'
          }
        </li>
      </ul>
      <p>
        {@html
          $language === 'en'
            ? 'DNA analysis today plays a unique role in forensic science and is universally accepted in most legal systems. In forensic medicine, it has become an integral part of standard procedures in the investigation of various crimes, establishing identity, and conducting paternity testing. The use of DNA analysis is an indispensable method for identifying the remains of victims of natural disasters, terrorist attacks, civil and military traffic accidents, fires, explosions, and war casualties. The development of DNA extraction and analysis methods has enabled the successful detection of DNA profiles from various biological traces.<br><br>The results of DNA analysis are a fundamental form of evidence in numerous civil and criminal cases at municipal and county courts. Although DNA analysis can unequivocally determine the identity of a person or a biological trace, proper interpretation of laboratory results requires significant expertise and experience.<br><br>Genos d.o.o. was the first private laboratory in Croatia authorized to conduct forensic DNA analyses, and our clients recognize this accreditation as an added value that contributes to trust and reliability in our results.<br><br>Our team includes a permanent court expert with extensive experience in DNA analysis and collaborates with other court experts in Croatia. Our experts were part of the nat\n'
            : 'Analiza DNA danas ima jedinstvenu ulogu u forenzičkim znanostima i univerzalno je prihvaćena u većini pravnih sustava. U sudskoj medicini je postala sastavni dio standardnih postupaka u istragama raznih zločina, utvrđivanju identiteta te vještačenju roditeljstva. Primjena analize DNA je neizostavna metoda kod utvrđivanja identiteta posmrtnih ostataka žrtava prirodnih katastrofa, terorističkih napada, civilnih i vojnih prometnih nesreća, požara, eksplozija i žrtava rata. Razvojem metoda izdvajanja i analize DNA omogućeno je uspješno detektiranje DNA profila iz različitih bioloških tragova.<br><br>Rezultat analize DNA temeljni je dokaz u brojnim građanskim i kaznenim predmetima na općinskim i županijskim sudovima. Iako DNA analiza može nedvojbeno utvrditi identitet osobe ili biološkog traga, pravilna interpretacija laboratorijskih rezultata zahtijeva značajnu stručnost i iskustvo.<br><br>Genos d.o.o. bio je prvi privatni laboratorij u Hrvatskoj ovlašten za provedbu forenzičkih DNA analiza, a to priznanje naši klijenti prepoznaju kao dodatnu vrijednost koja doprinosi povjerenju u pouzdanost naših rezultata.<br><br>Naš tim uključuje stalnog sudskog vještaka s bogatim iskustvom u DNA analizama te surađuje i s drugim sudskim vještacima u Hrvatskoj. Naši su stručnjaci bili dio nacionalnog tima za identifikaciju žrtava Domovinskog rata pod okriljem Ministarstva obitelji, branitelja i međugeneracijske solidarnosti.<br><br>Za razliku od tvrtki koje testiranje DNA uzoraka povjeravaju vanjskim partnerima, sve analize provodimo u vlastitom laboratoriju u Zagrebu.<br><br>Novija znanstvena otkrića iz područja molekularne biologije omogućila su analizu DNA koja zadovoljava sve kriterije izuzetno pouzdane metode za testiranje spornog roditeljstva. Time je testiranje očinstva, odnosno majčinstva, postalo dostupnije široj javnosti.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Paternity/Maternity Testing for Personal Purposes'
            : 'Testiranje očinstva/majčinstva za osobne potrebe'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'To determine paternity/maternity upon personal request, it is sufficient to compare the DNA profiles of one parent and the child. We analyze 18 or 24 STR markers (loci), which are recognized by international guidelines as sufficiently discriminatory, providing a probability of biological parenthood greater than 99.99%.<br><br>For greater accuracy in determining paternity, we recommend including the mother\'s sample in the analysis. When standard samples from the alleged father, child, and mother are analyzed, the mother\'s sample is tested at no additional cost.<br><br>After obtaining and comparing DNA profiles in paternity testing, mandatory alleles are identified to determine whether the alleged father carries the listed alleles. A mandatory allele is one inherited from the biological parent.<br><br>If the analysis result shows a mismatch in at least three mandatory alleles between the child and the alleged father, it can be concluded with certainty that the alleged father is not the biological father. In cases of mismatch in one or even two molecular markers, it may be assumed that mutations (which are relatively common) are present. In such cases, it is recommended to include the mother\'s sample in the analysis or test additional genetic markers.<br><br>If there is a need or the client requests testing of additional markers, Genos can, for an additional fee, perform analysis on a total of 24 markers.'
            : 'Za utvrđivanje očinstva/majčinstva na osobni zahtjev dovoljno je usporediti DNA profile jednog roditelja i djeteta. Analiziramo 18 ili 24 STR biljega (lokusa), koji su prema međunarodnim preporukama priznati kao dovoljno diskriminatorni tj. daju vjerojatnost biološkog roditeljstva veću od 99,99%.<br><br>Za veću točnost u utvrđivanju očinstva preporučujemo uključivanje uzorka majke u analizu. Kada se analiziraju standardni uzorci pretpostavljenog oca, djeteta i majke, uzorak majke se analizira bez dodatne naknade.<br><br>Nakon dobivanja i usporedbe DNA profila, u testiranju očinstva, identificiraju se obvezni aleli kako bi se utvrdilo nosi li pretpostavljeni otac navedene alele. Obvezni alel je onaj koji je naslijeđen od biološkog roditelja.<br><br>Pokaže li rezultat analize nepodudaranje u najmanje tri obvezna alela između djeteta i pretpostavljenog oca, sa sigurnošću se može isključiti da je pretpostavljeni otac biološki otac djeteta. U slučajevima nepodudaranja na jednom ili čak dva molekularna biljega, može se pretpostaviti da se radi o mutacijama (koje su relativno česte). U takvim slučajevima preporučuje se uključivanje uzorka majke u analizu ili testiranje dodatnih genetičkih biljega.<br><br>Ukoliko postoji potreba ili stranka izrazi želju za testiranjem dodatnih biljega, Genos je u mogućnosti, uz nadoplatu, napraviti analizu na ukupno 24 biljega.\n'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Paternity/Maternity Testing for Legal Proceedings'
            : 'Testiranje očinstva/majčinstva za sudske postupke'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Establishing or disputing paternity/maternity for legal proceedings is carried out based on a Decision issued by the competent court, by comparing the genotypes of the mother, child, and alleged father. As a certified court expert, Genos d.o.o. also conducts paternity testing upon personal request, and the report and opinion of our authorized court expert are admissible as legal evidence. This helps avoid unnecessary costs of double testing (once for personal purposes and once for legal proceedings).<br><br>The probability values of paternity in court expert reports range from one in several million to one in several billion. The minimum threshold required to conclusively establish paternity in court is 99.999%.'
            : 'Utvrđivanje ili osporavanje očinstva/majčinstva za sudske postupke provodi se na temelju Rješenja nadležnog suda, usporedbom genotipova majke, djeteta i pretpostavljenog oca. Kao stalni sudski vještak, Genos d.o.o. provodi testiranje očinstva i na osobni zahtjev, a nalaz i mišljenje našeg ovlaštenog sudskog vještaka vrijedi kao dokaz na sudu. To pomaže u izbjegavanju nepotrebnih troškova dvostrukog testiranja (jednom za osobne potrebe, a jednom za sudske postupke).<br><br>Vrijednosti vjerojatnosti očinstva kod vještačenja za potrebe suda kreću se od jedan prema nekoliko milijuna, do jedan prema nekoliko milijardi. Minimalna granica koja je potrebna za nedvojbeno utvrđivanje očinstva na sudu je 99,999 %.'
        }
      </p>
      <h4 id="3.2.">
        3.2. {$language === 'en' ? 'Kinship testing' : 'Utvrđivanje srodstva'}
      </h4>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Male Lineage Testing – Analysis of 23 STR markers on the Y chromosome'
              : 'Testiranje srodstva po muškoj liniji – Analiza 23 STR biljega na Y kromosomu'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Sibling and Half-Sibling Testing – Analysis of 24 STR markers'
              : 'Testiranje srodstva između braće/sestara te polubraće/polusestara– Analiza 24 STR biljega'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Grandparent-Grandchild Testing – Analysis of 24 STR markers'
              : 'Testiranje srodstva između djeda (bake) i unučadi – Analiza 24 STR biljega'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Patrilineality'
            : 'Testiranje srodstva po muškoj liniji'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Paternity testing through the male line is conducted by analyzing 23 STR markers on the Y chromosome. Since the sex chromosome is inherited unchanged, kinship is confirmed by a complete match of all the analyzed Y STR markers. Any changes that might occur are mutations, which are random nucleotide substitutions that happen spontaneously and very rarely.<br><br>The Y chromosome is inherited through the male line, passed directly from father to son. Therefore, all male relatives on the paternal side share the same markers on the Y chromosome, meaning they have an identical Y DNA profile. This method is useful in indirect paternity testing for male children when a male relative on the paternal side (brother, grandfather, uncle, or any male family member) can substitute for the deceased alleged father. It can also be applied for proving kinship between brothers, grandfather and grandson, uncle and nephew, etc. The test is also used in male identification cases when only paternal relatives are available.<br><br>Y chromosome testing is valuable in the following cases:'
            : 'Testiranje srodstva po muškoj liniji provodi se analizom 23 STR biljega na Y kromosomu. Budući da se spolni kromosom nasljeđuje nepromijenjen, srodstvo se potvrđuje potpunim podudaranjem svih analiziranih Y STR biljega. Promjene koje bi se eventualno mogle dogoditi su mutacije, koje predstavljaju nasumične zamjene nukleotida, koje se događaju spontano i vrlo rijetko.<br><br>Y kromosom se nasljeđuje po muškoj liniji, odnosno prenosi se izravno s oca na sina. Stoga svi muški srodnici s očeve strane dijele iste lokuse na Y kromosomu, što znači da imaju identičan Y DNA profil. Ova metoda je korisna i primjenjiva u neizravnom testiranju očinstva za mušku djecu kada muški srodnik s očeve strane (brat, djed, stric ili bilo koji član obitelji po muškoj liniji) može zamijeniti preminulog navodnog oca.<br><br>Također se može primijeniti za dokazivanje srodstva između braće, djeda i unuka, strica i nećaka itd. Primjenjuje se i u slučajevima identifikacije muške osobe kada su dostupni samo srodnici s očeve strane.<br><br>Testiranje po Y kromosomu je korisno u slučajevima:'
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
              : 'Kada je potrebno službeno dokazivanje srodstva između muških osoba, kao što je u sudskim sporovima ili imigracijskim slučajevima.'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Sibling and Half-Sibling Testing'
            : 'Testiranje srodstva između braće i sestara te polubraće i polusestara'
        }
      </h5>
      <p>
        {@html
          $language === 'en'
            ? 'Kinship testing for first-generation relationships between potential siblings and half-siblings is conducted by analyzing 24 STR markers. The test is used when the alleged father is unavailable for testing, and potential brothers or sisters, or half-siblings, want to confirm if they share the same father.<br><br>There are two types of tests:'
            : 'Testiranje srodstva za prve generacije odnosa između potencijalnih braće i sestara ili polubraće i polusestara provodi se analizom 24 STR biljega. Test se koristi kada pretpostavljeni otac nije dostupan za testiranje, a potencijalni braća i sestre, ili polubraća i polusestre, žele utvrditi da li imaju istog oca.<br><br>Postoje dva tipa testova:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Full-Sibling Test – To confirm if two individuals share the same biological parents'
              : 'Test utvrđivanja srodstva između polubraće i polusestara – Za potvrdu da li dvoje pojedinaca dijele jednog biološkog roditelja.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Half-Sibling Test – To confirm if two individuals share one biological parent.'
              : 'Test utvrđivanja srodstva između braće i sestara – Za potvrdu da li dvoje pojedinaca dijele iste biološke roditelje'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'Grandparent-Grandchild Testing'
            : 'Testiranje srodstva između djeda (bake) i unučadi'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'Grandparent-grandchild testing is performed by analyzing 24 STR markers and is conducted when the alleged father is unavailable for testing. The test confirms whether the child is biologically related to the grandparents, thus aiding in identifying the biological father. This test can also assist in confirming maternity.'
            : 'Testiranje srodstva između djeda/bake i unuka/unuke provodi se analizom 24 STR biljega i provodi se kada pretpostavljeni otac nije dostupan za testiranje. Testom se utvrđuje da li je dijete biološki povezano s djedom i bakom i time pomaže u identificiranju biološkog oca djeteta. Ovaj test također može pomoći u potvrđivanju majčinstva.'
        }
      </p>
      <h4 id="3.3.">3.3.
        {
          $language === 'en'
            ? 'Non-Invasive Prenatal Gender and Paternity Testing'
            : 'Neinvazivno prenatalno utvrđivanje spola djeteta i testiranje očinstva'
        }
      </h4>
      <p>
        {@html
          $language === 'en'
            ? 'The sex of a baby is usually determined via ultrasound. However, in cases where this is not possible, prenatal gender determination can be performed through a DNA test.<br><br>This test analyzes free fetal DNA present in the mother’s blood by detecting Y STR markers. Since the Y chromosome is unique to males, the presence of a Y chromosome confirms that the fetus is male. If Y chromosome is not detected, the fetus is female.<br><br>Genos DNA Laboratory researchers, in collaboration with other scientific institutions, were among the first to publish findings on prenatal gender determination in the prestigious journal Prenatal Diagnosis in 2008.<br><br>Paternity testing before birth is only possible if the fetus is male. The fetal Y DNA profile is compared to the Y DNA profile of the alleged father to determine if they match.<br><br>However, prenatal paternity testing is not possible if the alleged fathers are close male relatives (e.g., brothers or father and son) since they share an identical Y chromosome. Due to this limitation, it is recommended to test all alleged fathers and confirm paternity with a standard DNA test after birth. This analysis can only determine whether the alleged father can be the biological father but cannot definitively confirm paternity—it can only exclude a man as the biological father.<br><br>Testing is available from the 18th week of pregnancy. An appointment must be scheduled in advance, and a pregant woman must bring her pregnancy record book. The test requires 9 ml of the mother’s venous blood and a buccal swab from the alleged father. The blood draw is completely safe for the fetus.'
            : 'Spol djeteta najčešće se određuje ultrazvukom. No, nerijetko se događa da to ipak nije moguće te se u takvim situacijama može primijeniti prenatalno utvrđivanje spola fetusa.<br><br>Radi se o analizi slobodne fetalne DNA prisutne u krvi majke detekcijom 23 Y STR biljega. Budući da je Y kromosom specifičan za muškarce, prisutnost Y kromosoma potvrđuje da je fetus muškog spola. Ako Y kromosom nije detektiran, fetus je ženskog spola.<br><br>Istraživači iz Genos DNA laboratorija, u suradnji s drugim znanstvenim institucijama, bili su među prvima koji su 2008. godine objavili rezultate istraživanja o prenatalnom određivanju spola u prestižnom časopisu Prenatal Diagnosis.<br><br>Testiranje očinstva prije rođenja moguće je samo ako je fetus muškog spola. Dobiveni Y DNA profil fetusa uspoređuje se s Y DNA profilom pretpostavljenog oca kako bi se utvrdilo podudaranje. Međutim, prenatalno testiranje očinstva nije moguće ako su pretpostavljeni očevi bliski muški rođaci (npr. braća ili otac i sin), jer dijele identičan Y kromosom. Zbog tog ograničenja preporučuje se testiranje svih pretpostavljenih očeva te naknadna potvrda očinstva standardnim DNA testom nakon rođenja. Ova analiza može isključiti muškarca kao biološkog oca, ali ne može s apsolutnom sigurnošću potvrditi očinstvo.<br><br>Testiranje je moguće od 18. tjedna trudnoće. Potrebno je prethodno dogovoriti termin, a trudnica na izuzimanje uzoraka mora donijeti trudničku knjižicu. Za analizu se uzima 9 ml venske krvi trudnice te bris sluznice usne šupljine potencijalnog oca. Uzimanje uzorka potpuno je sigurno za fetus.'
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
              : 'Utvrđivanje DNA profila – Analiza 24 STR biljega'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Detection of Seminal Fluid Traces'
              : 'Utvrđivanje prisutnosti tragova sjemene tekućine'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'DNA Isolation'
              : 'Izolacija DNA'
          }
        </li>
      </ul>
      <h5>
        {
          $language === 'en'
            ? 'DNA Profiling'
            : 'Utvrđivanje DNA profila'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'DNA profiling is often requested to verify an existing DNA profile, confirm the authenticity of previous test results, or supplement earlier paternity or kinship tests. A DNA profile serves as genetic identification and can be used in various cases, such as:'
            : 'Utvrđivanje DNA profila često se traži kako bi se provjerila vjerodostojnost postojećeg DNA profila, potvrdila autentičnost prethodnih rezultata testiranja ili dopunili raniji testovi očinstva ili srodstva. DNA profil služi kao genetička identifikacija i može se koristiti u različitim slučajevima, poput:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Establishing or disputing inheritance rights'
              : 'ostvarivanja ili osporavanja prava na nasljedstvo'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Resolving cases of missing or abducted children'
              : 'rješavanja slučajeva nestale ili otete djece'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Immigration disputes'
              : 'imigracijskih sporova'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'For individuals in high-risk professions'
              : 'za osobe u visokorizičnim profesijama'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Insurance purposes'
              : 'za potrebe osiguranja'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Identifying victims of natural disasters, accidents, or terrorist attacks'
              : 'identifikacije žrtava prirodnih katastrofa, nesreća ili terorističkih napada'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Investigating potential sample mix-ups (e.g., verifying preserved tissue samples in cancer diagnoses or ensuring proper handling of reproductive cells in IVF procedures)'
              : 'istraga potencijalnih zamjena uzoraka (npr. provjera sačuvanih uzoraka tkiva u dijagnozama raka ili osiguranje pravilnog rukovanja reproduktivnim stanicama u IVF postupcima)'
          }
        </li>
      </ul>
      <p>
        {
          $language === 'en'
            ? 'DNA profiling is performed by analyzing 24 STR loci.'
            : 'DNA profiliranje se izvodi analizom 24 STR lokusa.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Detection of Semen Traces'
            : 'Utvrđivanje prisutnosti tragova sjemene tekućine'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'The presence of semen traces on various samples (e.g., clothing, bedding, towels, vaginal swabs) is determined using the RSID™-Semen test (Rapid Stain Identification of Human Semen; Independent Forensics, USA). This test detects the presence of human semenogelin protein via an immunochromatographic strip assay using two anti-semenogelin monoclonal antibodies.'
            : 'Prisutnost tragova sjemene tekućine na različitim uzorcima (npr. odjeća, posteljina, ručnici, vaginalni brisevi) utvrđuje se korištenjem RSID™-Semen testa (Rapid Stain Identification of Human Semen; Independent Forensics, SAD). Ovaj test detektira prisutnost humanog proteina semenogelina imunokromatografskom testnom trakom koristeći dva anti-semenogelin monoklonska protutijela.'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'DNA Isolation'
            : 'Izolacija DNA'
        }
      </h5>
      <p>
        {
          $language === 'en'
            ? 'DNA isolation is typically performed upon request when the DNA sample is needed for molecular diagnostic tests, which are essential for personalized medicine. These tests may include:'
            : 'Izolacija DNA obično se provodi na zahtjev stranke kojoj je uzorak DNA potreban za molekularno-dijagnostičke testove, koji su ključni za personaliziranu medicinu. Ovi testovi mogu uključivati:'
        }
      </p>
      <ul>
        <li>
          {
            $language === 'en'
              ? 'Assessing genetic predisposition to certain diseases or disorders to enable early prevention and targeted treatment'
              : 'Procjenu genetičke predispozicije za određene bolesti ili poremećaje radi omogućavanja rane prevencije i ciljanog liječenja'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'Evaluating treatment outcomes to improve drug efficacy and reduce ineffective treatments (pharmacogenetics)'
              : 'Procjene ishoda liječenja za poboljšanje učinkovitosti lijekova i smanjenje neučinkovitih tretmana (farmakogenetika)'
          }
        </li>
      </ul>
      <p>
        {@html
          $language === 'en'
            ? 'Since some of these analyses are not available in Croatia, the isolated DNA sample is often sent abroad for testing.<br><br>For DNA isolation, a 3 mL whole blood sample is required in a vacutainer tube with EDTA anticoagulant (purple cap). The sample should ideally be delivered immediately after collection. If necessary, it can be stored at +4°C for a few hours or at -20°C for longer periods.'
            : 'Često se radi o analizama koje nisu dostupne u Hrvatskoj, zbog čega se izolat DNA šalje u inozemstvo.<br><br>Za izolaciju DNA je potrebno 3 mL pune krvi u vacutainer epruveti s antikoagulansom EDTA (ljubičasti čep). Uzorak bi trebao biti dostavljen odmah nakon uzimanja. Ako je potrebno, može se čuvati na +4°C nekoliko sati ili na -20°C dulje vrijeme.'
        }
      </p>
      <h4 id="3.5.">
        3.5.
        {
          $language === 'en'
            ? 'Testing Procedure'
            : 'Postupak testiranja'
        }
      </h4>
      <p>
        {@html
          $language === 'en'
            ? 'In the DNA laboratory of Genos d.o.o., paternity/kinship testing through DNA analysis is conducted quickly and painlessly by collecting buccal swab samples (a swab of the inner cheek mucosa). Blood collection is not required.<br><br>Scheduling an appointment is mandatory before coming to the laboratory! Fasting before sample collection is not necessary.<br><br>Sample collection can be done at our laboratory in Zagreb (Borongajska cesta 83 H, 1st floor, BIOCenter building, within the Borongaj campus), or at our office in Osijek (Drniška 9).<br><br>For sample collection from minors, both parents/guardians must be present, or a written and notarized consent from the absent parent/guardian must be provided.<br><br>There is no age limit for paternity testing of a child.<br><br>If the test is being conducted for court purposes upon personal request, an appointment must be scheduled in advance. At the scheduled time, all parties must be present for sample collection. As a means of identification, valid ID cards or other valid photo IDs (including OIB) are required. For the child, a birth certificate and ID card (if available) must be presented. The child’s identity is confirmed by all parties involved through their signature on the order form.<br><br>If paternity testing is requested by the court, an authorized Genos representative may collect samples at the court during the hearing or at Genos premises based on a court decision.<br><br>You can also collect samples yourself in the privacy of your home using a DNA sample collection kit.<br><br>Results available as soon as possible!<br><br>For paternity/kinship testing upon personal request, the standard turnaround time for completing the analysis and delivering results is 7 working days from the date of payment and sample receipt in the lab.<br><br>The turnaround time for urgent analysis is 4 working days. Urgent analysis incurs an additional fee.<br><br>For court purposes, the turnaround time for completing the analysis and delivering the expert opinion is 10 working days.<br><br>The analysis results are delivered exclusively to the ordering party or the person specified on the signed order form. You will receive the results by email, mail, or in person—depending on your preference indicated on the order form. Only the status of the analysis can be provided over the phone, not the results!'
            : 'U DNA laboratoriju tvrtke Genos d.o.o., određivanje očinstva/rodbinskih odnosa putem DNA analize, provodi se brzo i bezbolno izuzimanjem uzoraka brisa bukalne sluznice (bris sluznice usne šupljine s unutarnje strane obraza). Izuzimanje krvi nije potrebno.<br><br>Za dolazak u laboratorij obavezno je dogovoriti termin dolaska! Prije izuzimanja uzorka nije potrebno biti natašte.<br><br>Izuzimanje uzoraka može se obaviti u našem laboratoriju u Zagrebu (Borongajska cesta 83 H, 1. kat, zgrada BIOCentra, unutar kampusa Borongaj), ili u našoj poslovnici u Osijeku (Drniška 9).<br><br>Za izuzimanje uzoraka maloljetne djece obavezna je nazočnost oba roditelja/skrbnika ili pisana i ovjerena suglasnost roditelja/skrbnika koji nije nazočan.<br><br>Ne postoji dobna granica djeteta za utvrđivanja očinstva.<br><br>Ukoliko se testiranje provodi na osobni zahtjev za sudske potrebe, prije dolaska je potrebno dogovoriti termin. U dogovorenom terminu sve stranke trebaju zajedno pristupiti izuzimanju uzoraka. Kao sredstvo identifikacije trebaju donijeti važeće osobne iskaznice ili neki drugi važeći dokument sa slikom (koji uključuje i OIB), a za dijete rodni list i osobnu iskaznicu (ukoliko ju posjeduje). Identitet djeteta potvrđuju sve stranke u postupku svojim potpisom na narudžbenici.<br><br>Ukoliko se testiranje očinstva provodi na zahtjev suda, ovlaštena osoba tvrtke Genos može izuzeti uzorke na sudu tijekom rasprave ili u prostorijama tvrtke Genos temeljem Rješenja suda.<br><br>Uzorke možete izuzeti i sami u privatnosti svog doma koristeći Set za izuzimanje uzoraka za analizu DNA.<br><br>Rezultati analize u najkraćem roku!<br><br>Za testiranje očinstva/srodstva na osobni zahtjev standardni rok za dovršetak analize i dostavu rezultata je 7 radnih dana od dana zaprimanja uplate i uzoraka u laboratorij.<br><br>Rok za slanje rezultata za hitnu analizu je 4 radna dana. Hitna analiza se dodatno naplaćuje.<br><br>Za potrebe suda, rok za dovršetak analize te slanje nalaza i mišljenja ovlaštenog sudskog vještaka je 10 radnih dana.<br><br>Rezultat analize dostavlja se isključivo naručitelju ili osobi koju je naručitelj naveo na potpisanoj narudžbenici. Rezultate ćete primiti e-mail-om, poštom ili osobno preuzeti ovisno o tome kako ste označili na narudžbenici. Telefonom je moguće dobiti isključivo informaciju o statusu analize, ali ne i rezultat analize!'
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
      <h4 id="3.5.1.">
        3.5.1.
        {
          $language === 'en'
            ? 'Set for DNA sample collection and analysis'
            : 'Set za izuzimanje uzoraka za analizu DNA'
        }
      </h4>
      <p>
        {@html $language === 'en'
          ? 'The Sample Collection Kit is used for DNA analysis from a buccal swab sample.<br><br>Such samples can be collected easily and painlessly using the collectors from the kit, which are specially designed for this purpose.<br><br>The sterile protective tube is designed to safeguard the sample from environmental factors, reducing the overall risk of contamination and enabling safe transport of the sample to the laboratory.<br><br>If the sample is collected according to the instructions enclosed in the kit, it remains preserved in the collector for months.<br><br>All collectors, the completed order form, and proof of payment need to be enclosed in the pre-addressed protective envelope and then mailed or delivered to the laboratory.<br><br>Sample Collection Kit for DNA Testing contains:'
          : 'Set za izuzimanje uzorka koristi se za DNA analizu iz brisa bukalne sluznice.<br><br>Takvi se uzorci mogu jednostavno i bezbolno uzeti pomoću kolektora iz seta, koji su posebno dizajnirani za tu svrhu.<br><br>Sterilna zaštitna epruveta osigurava zaštitu uzorka od vanjskih utjecaja, smanjuje rizik od kontaminacije i omogućuje siguran transport uzorka do laboratorija.<br><br>Ako se uzorak uzme prema uputama priloženima u setu, ostaje stabilan u kolektoru mjesecima.<br><br>Svi kolektori, ispunjena narudžbenica i potvrda o uplati moraju se staviti u unaprijed adresiranu zaštitnu omotnicu te poslati poštom ili osobno dostaviti u laboratorij.<br><br>Set za izuzimanje uzorka za DNA analizu sadrži:'}
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
          <li>Tri kolektora za uzorke brisa bukalne sluznice</li>
          <li>Vrećicu za pohranu uzorka</li>
          <li>Rukavice</li>
          <li>Upute</li>
          <li>Narudžbenicu</li>
          <li>Nepoderivu zaštitnu omotnicu za slanje uzoraka u laboratorij</li>
        </ul>
      {/if}
      <p>
        {@html
          $language === 'en'
            ? 'You can order the Sample Collection Kit by phone, e-mail or via our website and receive it at your home address. You can buy it in our laboratory and in pharmacies.'
            : 'Set za uzorkovanje možete naručiti telefonom, e-mailom ili putem naše web stranice i primit ćete ga na svoju kućnu adresu. Također ga možete kupiti u našem laboratoriju i u ljekarnama.'
        }
      </p>
      {#if $language === 'en'}
        <a class="button-filled" href="/contact">Order a set for sampling</a>
      {:else}
        <a class="button-filled" href="/kontakt">Naruči set za uzorkovanje</a>
      {/if}
      <h4 id="3.6.">
        {
          $language === 'en'
            ? '3.6. Data Confidentiality'
            : '3.6. Povjerljivost podataka'
        }
      </h4>
      <p>
        {@html
          $language === 'en'
            ? 'All DNA test results are strictly confidential. Biological samples submitted for DNA analysis are destroyed after testing, and all digital records are deleted 5 years after results are issued. Within this period, a copy of the issued results can be requested only by the original client through a written request.<br><br>The Genos d.o.o. DNA laboratory uses cutting-edge DNA analysis methods to provide accurate answers to all inquiries. However, in some cases, results may not align with expectations, which can have emotional and social consequences. Genos d.o.o. is not authorized to provide psychological counselling and cannot offer direct support in such situations.<br><br>If DNA test results cause emotional distress such as dissatisfaction, anger, fear, sadness, or concern, we strongly recommend seeking professional support from one of the organizations listed below, a family doctor, or a psychologist at the relevant social services center.<br><br>Psychological Center TESA, tel. 01 48 28 888 / <a href="https://www.tesa.hr" target="_blank" class="underline">www.tesa.hr</a><br>Society for Psychological Help, MODUS – Center for Children, Youth, and Families, tel. 01 4621 554 / <a href="https://www.dpp.hr" target="_blank" class="underline">www.dpp.hr</a>'
            : 'Rezultati svakog provedenog testiranja su strogo povjerljivi i izdaju se isključivo Naručitelju analize. Biološki uzorci dostavljeni na DNA analizu uništavaju se nakon testiranja, a svi digitalni zapisi brišu se 5 godina nakon izdavanja rezultata.<br><br>U tom periodu može se zatražiti kopija izdanog rezultata, isključivo uz osobni pisani zahtjev Naručitelja analize.<br><br>DNA laboratorij tvrtke Genos d.o.o. primjenjuje najsuvremenije metode analize DNA kako bi utvrdio istinit odgovor na sva pitanja koja su nam postavljena. Nažalost, ponekad se rezultat ne podudara s očekivanjima naručitelja i/ili ostalih sudionika testiranja što može imati negativne emocionalne i socijalne posljedice. Genos d.o.o. nije ovlašten za usluge psihološkog savjetovanja i ne može pružiti izravnu pomoć u takvim situacijama.<br><br>Ukoliko rezultati provedene analize DNA kod vas izazovu negativne emocije poput nezadovoljstva, srdžbe, straha, tuge ili zabrinutosti preporučujemo da se svakako obratite stručnim osobama na jednoj od dolje navedenih adresa, obiteljskom liječniku ili psihologu u nadležnom centru za socijalnu skrb.'
        }
      </p>
      <div>
        <ul>
          {#if $language === 'en'}
            <li>Psychological Center TESA, tel. <a class="underline" href="tel:+38514828888">+385 1 48 28 888</a> / <a class="underline" href="https://www.tesa.hr/">tesa.hr</a></li>
            <li>Society for Psychological Assistance, MODUS – Center for Children, Youth and Family, tel. <a class="underline" href="tel:+38514621554">+385 1 4621 554</a> / <a class="underline" href="https://dpp.hr/">dpp.hr</a></li>
          {:else}
            <li>Psihološki centar TESA, tel. <a class="underline" href="tel:+38514828888">+385 1 48 28 888</a> / <a class="underline" href="https://www.tesa.hr/">tesa.hr</a></li>
            <li>Društvo za psihološku pomoć, MODUS – Centar za djecu, mlade i obitelj, tel. <a class="underline" href="tel:+38514621554">+385 1 4621 554</a> / <a class="underline" href="https://dpp.hr/">dpp.hr</a></li>
          {/if}
        </ul>
      </div>
      <h4 id="3.7.">
        3.7.
        {
          $language === 'en'
            ? 'Avian Gender Determination via DNA Analysis'
            : 'Određivanje spola ptica putem DNA analize'
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
            : 'Spol mnogih vrsta ptica ne može se odrediti na temelju fizičkog izgleda i karakteristika. Korištenjem metoda DNA analize moguće je ispitati fragmente spolnih kromosoma ptica. To nam omogućava razlikovanje mužjaka ptica (ZZ) i ženki ptica (ZW).'
        }
      </p>
      <h5>
        {
          $language === 'en'
            ? 'Advantages of DNA Analysis'
            : 'Prednosti DNA analize'
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
              : 'Točnost određivanja spola na temelju DNA ne ovisi o dobi ptice.'
          }
        </li>
        <li>
          {
            $language === 'en'
              ? 'The accuracy of DNA sex determination is very high (>99%).'
              : 'Točnost određivanja spola na temelju DNA je vrlo visoka (>99%).'
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
              : 'Analizu provode stručnjaci s dugogodišnjim iskustvom u DNA analizi.'
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
              : '3–5 svježe iščupanih pera, po mogućnosti sa prsa ptica (prikupljati bez dodirivanja vrha pera rukama).'
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
              : 'Prilikom slanja uzoraka poštom, priložite popunjenu i potpisanu narudžbenicu.'
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
      <h5>GENBird test</h5>
      <p>
        {@html
          $language === 'en'
            ? 'The GENBird Test allows for simple and non-invasive DNA sample collection from birds using either feathers or blood. Clear instructions guide users through labeling, collecting, and sending the samples. Feathers must include the calamus (the base of the feather) as it contains DNA, while blood is collected with a sterile needle and applied to a card or tissue. Each sample is stored in a labeled paper envelope and sent to the lab with an order form. The test enables accurate genetic analysis while ensuring the bird’s wellbeing and sample quality.'
            : 'GENBird test omogućuje jednostavno i neinvazivno prikupljanje DNA uzoraka ptica putem pera ili krvi. Upute jasno opisuju kako označiti, prikupiti i poslati uzorke. Važno je da pero sadrži kalamus (osnovu pera) jer on nosi DNA, dok se krv uzima sterilnom iglom i nanosi na papir ili maramicu. Svaki uzorak sprema se u označenu papirnatu omotnicu i šalje u laboratorij zajedno s narudžbenicom. Test omogućuje točnu genetsku analizu uz brigu o zdravlju ptice i kvaliteti uzorka.'
        }
      </p>
      <ul>
        <li>
          {#if $language === 'en'}
            <a href="/pdfs/genbird-en.pdf" target="_blank" class="underline">View intructions for the GENBird test (PDF)</a>
          {:else}
            <a href="/pdfs/genbird-hr.pdf" target="_blank" class="underline">Pogledaj uputstva za GENBird test (PDF)</a>
          {/if}
        </li>
      </ul>
    </div>
  </div>
</div>
