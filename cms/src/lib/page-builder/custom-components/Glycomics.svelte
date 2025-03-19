<svelte:options customElement={{ tag: 'pb-glycomics', shadow: 'none' }} />

<script lang="ts">
  $effect(() => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', String(window.scrollY));
    });
  });
</script>

<div class="grid grid-small publications-grid">
  <div class="publications-years">
    <a href="/services/glycomics#technologies" class="publication-year-link">Technologies</a>
    <a href="/services/glycomics#sample-types" class="publication-year-link">Sample types</a>
    <a href="/services/glycomics#analyses" class="publication-year-link">Analyses</a>
    <a href="/services/glycomics#high-throughput-analyses" class="publication-year-link">High-throughput analysis</a>
  </div>

  <div class="publications">
    <div id="technologies">
      <h2>Technologies</h2>
      <div class="flex flex-col gap-12">
        <div class="publication-card">
          <div class="publication-card-paper">UHPLC GLYCOPROFILING</div>
          <div class="publication-card-author">7 Waters UHPLC instruments with fluorescence detectors, HT glycoprofiling of up to 200 samples/day</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">CGE GLYCOPROFILING</div>
          <div class="publication-card-author">2 Applied Biosystems 3500 DNA sequencers adapted for glycan analysis, HT glycoprofiling of up to 300 samples/day</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">MS GLYCOPROFILING</div>
          <div class="publication-card-author">2 Bruker Compact Q-TOF coupled to Waters nanoUPLC systems, Orbitrap Exploris 240 coupled to Dionex UltiMate 3000 RSLCnano system, HT glycoprofiling of up to 100 samples/day</div>
        </div>
      </div>
    </div>
    <div id="sample-types">
      <h2>Sample types</h2>
      <div class="flex flex-col gap-12">
        <div class="publication-card">
          <div class="publication-card-paper">Complex biological samples</div>
          <div class="publication-card-author">(e.g. human serum/plasma, cell lysates, tissues)</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Purified glycoproteins</div>
          <div class="publication-card-author">(e.g. human IgG, IgA, AGP, C3, transferrin, HDL, LDL, rodent IgG)</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Biopharmaceuticals</div>
          <div class="publication-card-author">(e.g. mAb)</div>
        </div>
      </div>
    </div>
    <div id="analyses">
      <h2>Analyses</h2>
      <div class="flex flex-col gap-12">
        <div class="publication-card">
          <div class="publication-card-paper">Released N-glycans</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Site-specific glycosylation</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Structural characterization of glycans</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Glycosylation site occupancy</div>
        </div>
      </div>
    </div>
    <div id="high-throughput-analyses">
      <h2>High-Throughput analyses</h2>
      <div class="flex flex-col gap-12">
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of total human serum/plasma N-glycans</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of total human IgG N-glycans</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of total human IgA N-glycans</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of subclass-specific human IgG N-glycopeptides</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of human AGP N-glycopeptides</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of human C3 N-glycopeptides</div>
        </div>
        <div class="publication-card">
          <div class="publication-card-paper">Analysis of subclass-specific rodent IgG N-glycopeptides</div>
        </div>
      </div>
    </div>
  </div>
</div>
