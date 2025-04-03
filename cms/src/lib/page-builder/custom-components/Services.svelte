<script>
import {language} from '$lib/page-builder/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-services', shadow: 'none' }} />

<div class="grid grid-large gap-12 spacer">
  <div class="gc-12">
    <h2 class="h5">{$language === 'en' ? 'What we offer' : 'Što nudimo'}</h2>
  </div>
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="{$language === 'en' ? '/glycomics' : '/glikomika'}" target="_blank">
      <img src="/images/ga-card.jpg" alt="glycanage kit">
      <div class="p-4">
        <h3 class="font-bold underline">{$language === 'en' ? 'Glycomics' : 'Glikomika'}</h3>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="{$language === 'en' ? '/epigenetics' : '/epigenetika'}" target="_blank">
      <img src="/images/hgp-card.jpg" alt="human glycome project logo">
      <div class="p-4">
        <h3 class="font-bold underline">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</h3>
      </div>
    </a>
  </div>
  <div class="gc-4 gc-sm-12 h-full">
    <a class="resource-card" href="{$language === 'en' ? '/dna-and-forensics' : '/dnk-i-forenzika'}" target="_blank">
      <img src="/images/lbg-card.jpg" alt="library of brain glycans logo">
      <div class="p-4">
        <h3 class="font-bold underline">{$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}</h3>
      </div>
    </a>
  </div>
</div>