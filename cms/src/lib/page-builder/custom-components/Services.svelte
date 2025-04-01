<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

<svelte:options customElement={{ tag: 'pb-services', shadow: 'none' }} />

<div class="grid grid-large spacer">
  <div class="col-span-12">
    <h2 class="h5">{$language === 'en' ? 'What we offer' : 'Što nudimo'}</h2>
    <ul>
      <li><a class="underline" href={$language === 'en' ? '/glycomics' : '/glikomika'}>{$language === 'en' ? 'Glycomics' : 'Glikomika'}</a></li>
      <li><a class="underline" href="{$language === 'en' ? '/epigenetics' : '/epigenetika'}">{$language === 'en' ? 'Epigenetics' : 'Epigenetika'}</a></li>
      <li><a class="underline" href="{$language === 'en' ? '/dna-and-forensics' : '/dnk-i-forenzika'}">{$language === 'en' ? 'DNA & Forensics' : 'DNK i Forenzika'}</a></li>
    </ul>
  </div>
</div>