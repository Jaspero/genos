<svelte:options customElement={{ tag: 'pb-epigenetics', shadow: 'none' }} />

<script lang="ts">
  import {language} from '$lib/page-builder/stores/language';

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
  <div class="col-span-4 tab-selectors">
    <div class="flex flex-col mb-4">
      <h2>{$language === 'en' ? 'Services' : 'Usluge'}</h2>
      <a href="/{$language === 'en' ? 'glycomics' : 'glikomika'}" class="tab-selector">{$language === 'en' ? 'Glycomics' : 'Glikomika'}</a>
      <span class="tab-selector active">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</span>
      <a href="/{$language === 'en' ? 'dna-and-forensics' : 'dna-i-forenzika'}" class="tab-selector">{$language === 'en' ? 'DNA and Forensics' : 'DNA i Forenzika'}</a>
    </div>
  </div>
  <div class="col-span-8 tabs flex flex-col gap-8">
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
