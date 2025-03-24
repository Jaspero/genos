<svelte:options customElement={{ tag: 'pb-services', shadow: 'none' }} />

<script>
  let tab = 1;
</script>

<div class="grid grid-large services-grid">
    <h2 class="col-span-12">What we offer</h2>
  <div class="col-span-4 tab-selectors">
    <button class="tab-selector" class:active={tab === 1} on:click={() => tab = 1}>High-throughput analyses</button>
    <button class="tab-selector" class:active={tab === 2} on:click={() => tab = 2}>In depth glycoprofiling</button>
    <button class="tab-selector" class:active={tab === 3} on:click={() => tab = 3}>Study design</button>
    <button class="tab-selector" class:active={tab === 4} on:click={() => tab = 4}>Data analysis</button>
    <button class="tab-selector" class:active={tab === 5} on:click={() => tab = 5}>Joint project development</button>
  </div>
  <div class="col-span-8 tabs">
    {#if tab === 1}
      Genos offers high-throughput analyses with relative quantification of N-glycans and N-glycopeptides developed and optimized for various human and rodent sample types. N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled with 2-AB, procainamide or APTS, purified and analysed by either hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) or capillary gel electrophoresis with laser-induced fluorescence (CGE-LIF). N-glycopeptides are obtained from glycoproteins by trypsin digestion, purified and analysed by C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS).
      <ul>
        <li>Analysis of total released human serum/plasma N-glycans by HILIC-UHPLC-FLD</li>
        <li>Analysis of total released human IgG N-glycans by HILIC-UHPLC-FLD</li>
        <li>Analysis of subclass-specific human IgG Fc N-glycopeptides by C18-LC-ESI-MS</li>
        <li>Analysis of total released human IgA N-glycans by HILIC-UHPLC-FLD</li>
        <li>Analysis of subclass-specific human IgA Fc N-glycopeptides by C18-LC-ESI-MS</li>
        <li>Analysis of human AGP N-glycopeptides by C18-LC-ESI-MS</li>
        <li>Analysis of human C3 N-glycopeptides by C18-LC-ESI-MS</li>
        <li>Analysis of total released mouse IgG N-glycans by HILIC-UHPLC-FLD or CGE-LIF</li>
        <li>Analysis of subclass-specific mouse IgG N-glycopeptides by C18-LC-ESI-MS</li>
        <li>Analysis of subclass-specific rat IgG N-glycopeptides by C18-LC-ESI-MS</li>
      </ul>
    {:else if tab === 2}
      Genos offers in-depth glycoprofiling for various sample types such as biopharmaceuticals and glycoproteins purified from complex samples. Sample preparation conditions and analysis parameters are optimised for a specific sample.

      <ul>
        <li>
          Analysis of released N-glycans
        </li>
      </ul>
      N-glycans are released from glycoproteins by digestion with PNGaseF, fluorescently labelled, purified and analysed by hydrophilic interaction ultra-high-performance liquid chromatography with fluorescence detection (HILIC-UHPLC-FLD) which allows relative quantification of different glycan species. Assignment of N-glycan structures is based on HILIC retention time, accurate mass and fragmentation spectra obtained by coupling HILIC-UHPLC-FLD to mass spectrometry via electrospray ionization (ESI-MS/MS).

      <ul>
        <li>
          Site-specific N-glycosylation analysis
        </li>
      </ul>
      N-glycopeptides are obtained from glycoproteins by protease digestion, purified and analysed by C18 liquid chromatography coupled to mass spectrometry via electrospray ionization (C18-LC-ESI-MS/MS). Relative quantification of N-glycopeptides in obtained in a site-specific manner determined by the amino acid sequence of the glycoprotein. Assignment of N-glycopeptide structures is based on accurate mass and fragmentation spectra.

      <ul>
        <li>
          N-glycosylation site occupancy analysis
        </li>
      </ul>
      Site occupancy analysis is used to calculate the occupancy of potential N-glycosylation sites by measuring the proportion of N-glycosylated peptides in total peptides. The analysis is performed by releasing N-glycans with PNGaseF in the presence of 18O water followed by protease digestion, purification and C18-LC-ESI-MS/MS.
    {:else if tab === 3}
      Genos offers consultancies in study design, under the full or partial control of the experiment, for different fields of biomedicine. The mixture of expertise from Genos employees (biologists, pharmacist, chemists, statisticians and mathematicians) ensures the quality of the study design.
    {:else if tab === 4}
      Data analysis is an important aspect of the workflow Genos provides to the public. Since pure numbers, without thoughtful and meaningful explanation, are usually of little interest Genos invested significantly to its employee’s competence in statistics and computer science. Therefore, Genos now offers a wide range of statistical techniques from basic experimental methods of normalization or batch correction to standard topics like statistical inference or machine/statistical learning.
    {:else if tab === 5}
      <p>Cooperation and joint project development</p>
      <br>
      Genos is also an active research organization. On the basis of the recommendation of the National Science Council, the Ministry of Science, Education and Sports of the Republic of Croatia issued a permit that allowed Genos to formally register as a research organization in 2007. Genos currently participates in six FP7 projects (GlycoBioM, HighGlycan, IBD-BIOM, MIMOmics, Pain-OMICS and HTP-GlycoMet).
      <br><br>
      We are constantly in search of potential collaborative projects where we can contribute with our expertise in high-throughput glycomics and extensive experience of participation in large FP7 and H2020 consortia.
    {/if}
  </div>
</div>