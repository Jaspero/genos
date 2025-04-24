<svelte:options customElement={{ tag: 'pb-glycomics', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';

  let tab = 1;
</script>

<div class="grid grid-large publications-grid">
  <div class="col-span-4 tab-selectors">
    <div class="flex flex-col mb-4">
      <h2>{$language === 'en' ? 'Services' : 'Usluge'}</h2>
      <span class="tab-selector active">{$language === 'en' ? 'Glycomics' : 'Glikomika'}</span>
      <a href="/{$language === 'en' ? 'epigenetics' : 'epigenetika'}" class="tab-selector">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</a>
      <a href="/{$language === 'en' ? 'dna-and-forensics' : 'dnk-i-forenzika'}" class="tab-selector">{$language === 'en' ? 'DNA and Forensics' : 'DNK i Forenzika'}</a>
    </div>
    <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>
      {$language === 'en' ? 'Technologies' : 'Tehnologije'}
    </button>
    <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>
      {$language === 'en' ? 'Sample types' : 'Tipovi uzoraka'}
    </button>
    <button class="tab-selector" class:active={tab === 3} on:click={() => tab = 3}>
      {$language === 'en' ? 'Glycoprofiling' : 'Glikoprofiliranje'}
    </button>
    <button class="tab-selector" class:active={tab === 4} on:click={() => tab = 4}>
      {$language === 'en' ? 'High-throughput analyses' : 'Visoko-protočna analiza'}
    </button>
    <button class="tab-selector" class:active={tab === 5} on:click={() => tab = 5}>
      {$language === 'en' ? 'Data analysis' : 'Analiza podataka'}
    </button>
    <button class="tab-selector" class:active={tab === 6} on:click={() => tab = 6}>
      {$language === 'en' ? 'Study design' : 'Dizajn istraživanja'}
    </button>
    <button class="tab-selector" class:active={tab === 7} on:click={() => tab = 7}>
      {$language === 'en' ? 'Joint research collaboration' : 'zajednička istraživačka suradnja'}
    </button>
  </div>

  <div class="col-span-8 tabs">
    {#if tab === 1}
      <div>
        <h2>Technologies</h2>
        <ul>
          <li>UHPLC GLYCOPROFILING</li>
        </ul>
        7 Waters UHPLC instruments with fluorescence detectors, HT glycoprofiling of up to 200 samples/day
        <img class="mt-2 max-w-[20rem]" src="/images/technologies/uplc.jpg" alt="uplc equipment">
        <ul>
          <li>CGE GLYCOPROFILING</li>
        </ul>
        2 Applied Biosystems 3500 DNA sequencers adapted for glycan analysis, HT glycoprofiling of up to 300 samples/day
        <img class="mt-2 max-w-[20rem]" src="/images/technologies/cge.jpg" alt="cge equipment">
        <ul>
          <li>MS GLYCOPROFILING</li>
        </ul>
        2 Bruker Compact Q-TOF coupled to Waters nanoUPLC systems, Orbitrap Exploris 240 coupled to Dionex UltiMate 3000 RSLCnano system, HT glycoprofiling of up to 100 samples/day
        <img class="mt-2 max-w-[20rem]" src="/images/technologies/ms.jpg" alt="ms equipment">
      </div>
    {:else if tab === 2}
      <div>
        <h2>Sample types</h2>
        <div class="flex max-w-[12rem] gap-4">
          <img class="object-cover" src="/images/sample-types/sample.jpg" alt="uplc equipment">
          <img class="object-cover" src="/images/sample-types/spinner.jpg" alt="uplc equipment">
          <img class="object-cover" src="/images/sample-types/pipettes.jpg" alt="uplc equipment">
        </div>
        <ul>
          <li>Complex biological samples</li>
        </ul>
        (e.g. human serum/plasma, cell lysates, tissues)
        <ul>
          <li>Purified glycoproteins</li>
        </ul>
        (e.g. human IgG, IgA, AGP, C3, transferrin, HDL, LDL, rodent IgG)
        <ul>
          <li>Biopharmaceuticals</li>
        </ul>
        (e.g. mAb)
      </div>
    {:else if tab === 3}
      <div>
        <h2>Glycoprofiling</h2>
        <ul>
          <li>Released N-glycans</li>
        </ul>
        N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled, purified and analysed by hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) which allows relative quantification of different glycan species. Assignment of N-glycan structures is based on HILIC retention time, accurate mass and fragmentation spectra obtained by coupling HILIC-UHPLC-FLD to mass spectrometry via electrospray ionization (ESI-MS/MS).
        <ul>
          <li>Site-specific glycosylation</li>
        </ul>
        N-glycopeptides are obtained from glycoproteins by protease digestion, purified and analysed by C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS/MS). Relative quantification of N-glycopeptides in obtained in a site-specific manner determined by the amino acid sequence of the glycoprotein. Assignment of N-glycopeptide structures is based on accurate mass and fragmentation spectra.
        <ul>
          <li>Glycosylation site occupancy</li>
        </ul>
        Site occupancy analysis is used to calculate the occupancy of potential N-glycosylation sites by measuring the proportion of N-glycosylated peptides in total peptides. The analysis is performed by releasing N-glycans with PNGaseF in the presence of 18O water followed by protease digestion, purification and C18-LC-ESI-MS/MS.
        <ul>
          <li>Structural characterization of glycans</li>
        </ul>
      </div>
    {:else if tab === 4}
      <div>
        <h2>High-Throughput analyses</h2>
        Genos offers in-depth glycoprofiling for various sample types such as biopharmaceuticals and glycoproteins purified from complex samples. Sample preparation conditions and analysis parameters are optimised for a specific sample.

        <ul>
          <li>Analysis of total human serum/plasma N-glycans</li>
          <li>Analysis of total human IgG N-glycans</li>
          <li>Analysis of total human IgA N-glycans</li>
          <li>Analysis of subclass-specific human IgG N-glycopeptides</li>
          <li>Analysis of human AGP N-glycopeptides</li>
          <li>Analysis of human C3 N-glycopeptides</li>
          <li>Analysis of subclass-specific rodent IgG N-glycopeptides</li>
        </ul>
      </div>
    {:else if tab === 5}
      Data analysis is an important aspect of the workflow Genos provides to the public. Since pure numbers, without thoughtful and meaningful explanation, are usually of little interest Genos invested significantly to its employee’s competence in statistics and computer science. Therefore, Genos now offers a wide range of statistical techniques from basic experimental methods of normalization or batch correction to standard topics like statistical inference or machine/statistical learning.
    {:else if tab === 6}
      Genos offers consultancies in study design, under the full or partial control of the experiment, for different fields of biomedicine. The mixture of expertise from Genos employees (biologists, pharmacist, chemists, statisticians and mathematicians) ensures the quality of the study design.
    {:else if tab === 7}
      <h2>Cooperation and joint project development</h2>
      <br>
      Genos is also an active research organization. On the basis of the recommendation of the National Science Council, the Ministry of Science, Education and Sports of the Republic of Croatia issued a permit that allowed Genos to formally register as a research organization in 2007. Genos currently participates in six FP7 projects (GlycoBioM, HighGlycan, IBD-BIOM, MIMOmics, Pain-OMICS and HTP-GlycoMet).
      <br><br>
      We are constantly in search of potential collaborative projects where we can contribute with our expertise in high-throughput glycomics and extensive experience of participation in large FP7 and H2020 consortia.
    {/if}
  </div>
</div>
