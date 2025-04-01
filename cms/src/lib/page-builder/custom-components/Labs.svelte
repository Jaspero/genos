<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-labs', shadow: 'none' }} />

<div class="grid grid-large labs-grid">
  <div class="col-span-12">
    <h2 class="text-center h4">{$language === 'en' ? 'Our research laboratories' : 'Naši istraživački laboratoriji'}</h2>
  </div>
  <div class="gc-4 gc-sm-6 gc-xs-12 h-full">
    <a href="{$language === 'en' ? '/glycomics' : '/glikomika'}" target="_blank" class="lab-card">
      <img class="lab-image" src="/images/lab.jpg" alt="Glycomics lab">
      <div class="lab-content">
        <h3 class="lab-name">{$language === 'en' ? 'Glycomics lab' : 'Laboratorij za glikomiku'}</h3>
        <span class="lab-description">We are the largest and most advanced laboratory dedicated to glycan analysis, setting the standard in high-throughput glycomics research. With the capacity for over 150,000 glycan analyses each year, our laboratory handles the majority of global glycan research.</span>
        <span class="lab-services">{$language === 'en' ? 'Services' : 'Usluge'}</span>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-6 gc-xs-12 h-full">
    <a href="{$language === 'en' ? '/epigenetics' : '/epigenetika'}" target="_blank" class="lab-card">
      <img class="lab-image" src="/images/lab.jpg" alt="Epigenetics lab">
      <div class="lab-content">
        <h3 class="lab-name">{$language === 'en' ? 'Epigenetics lab' : 'Laboratorij za epigenetiku'}</h3>
        <span class="lab-description">Our lab is the leading epigenetics laboratory in Croatia, pioneering the development of a custom CRISPR/dCas9 toolbox for precise gene regulation. We study the interplay between DNA methylation and histone modifications, the epigenetic regulation of protein glycosylation, and its role in complex diseases such as diabetes, chronic inflammation, and cancer.</span>
        <span class="lab-services">{$language === 'en' ? 'Services' : 'Usluge'}</span>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-6 gc-xs-12 h-full">
    <a href="{$language === 'en' ? '/dna-and-forensics' : '/dnk-i-forenzika'}" target="_blank" class="lab-card">
      <img class="lab-image" src="/images/lab.jpg" alt="DNA lab">
      <div class="lab-content">
        <h3 class="lab-name">{$language === 'en' ? 'DNA & Forensics lab' : 'Laboratorij za DNK i forenziku'}</h3>
        <span class="lab-description">As Croatia's first authorized forensic DNA laboratory, we specialize in precise paternity, kinship, and prenatal testing, offering accredited services for legal proceedings. With state-of-the-art technology and certified proficiency, we provide unmatched reliability in DNA analysis for both personal and court-ordered cases.</span>
        <span class="lab-services">{$language === 'en' ? 'Services' : 'Usluge'}</span>
      </div>
    </a>
  </div>
</div>