<svelte:options customElement={{ tag: 'pb-epigenetics', shadow: 'none' }} />

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

<div class="grid grid-large publications-grid">
  <div class="publications">
    <div id="technologies">
      <h2>Technologies</h2>
      <ul>
        <li>Epigenetics analyses</li>
      </ul>
      <ul>
        <li>Cell culture</li>
      </ul>
      <br>
      Equipment for specific epigenetic analyses:
      <ul>
        <li>Pyrosequencers PyroMark Q24 Advanced (Qiagen) for DNA methylation analyses</li>
        <li>A sonicator Sonopuls mini20 for cells distruption</li>
        <li>Bioruptor Plus sonication device for chromatin Fragmentation</li>
      </ul>
      <br>
      Equipment for cell culture work:
      <ul>
        <li>Two Panasonic CO2 incubators</li>
        <li>Brunswick S41i CO2 Incubator Shaker</li>
        <li>Three class II safety cabinets</li>
        <li>Nucleofector for electroporation of animal cells in culture</li>
        <li>Laboratory BSL2+ for lentiviral production with equipment</li>
      </ul>
    </div>
    <div id="services">
      <h2>Services</h2>
      <ul>
        <li>Analysis of DNA methylation by pyrosequencing</li>
        <li>High-throughput gene expression analysis</li>
        <li>Custom purpose design and production of CRISPR/dCas9-based molecular tools</li>
      </ul>
    </div>
  </div>
</div>
