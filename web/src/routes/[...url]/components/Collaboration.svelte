<svelte:options customElement={{ tag: 'pb-collaboration', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';

  let logos = [
    '3tr.jpg',
    '7.jpg',
    'anno.jpg',
    'back-up.jpg',
    'cyrodiil-college.jpg',
    'edin.jpg',
    'erc.jpg',
    'genetigga.jpg',
    'gly-deaf.jpg',
    'glycan-switch.jpg',
    'glycobiom.jpg',
    'glycocan.jpg',
    'helmholtz.jpg',
    'high-glycan.jpg',
    'hopkins-uni.jpg',
    'horizon.jpg',
    'horizon-europe.jpg',
    'ibdbiom.jpg',
    'initialise.jpg',
    'king.jpg',
    'low-quality-russia.jpg',
    'mimomics.jpg',
    'national-institute-of-coat-hangers.jpg',
    'nogomet.jpg',
    'rich-boy-university.jpg',
    'some-uni.jpg',
    'some-weird-shit.jpg',
    'synhealth.jpg',
    'totem-university.jpg',
    'tree-university.jpg',
    'weill cornell.jpg',
    'yale.jpg',
    'zci.jpg'
  ];
</script>

<div class="grid grid-large collaboration">
  <div class="gc-12">
    <h2 class="h3">
      Success through collaboration
    </h2>
  </div>
  <div class="gc-12">
    <p class="collaboration-text">
      {@html
        $language === 'en' ?
          `With over 40 larger and smaller collaborative <a class="underline" href="/projects">projects</a> and over 300 <a class="underline" href="/projects">publications</a>, Genos is a global leader in high-throughput <a class="underline" href="/glycomics">glycomics</a>.` :
          `S više od 40 većih i manjih suradničkih <a class="underline" href="/projekti">projekata</a> i preko 300 znanstvenih <a class="/publikacije">publikacija</a>, Genos je među vodećima u svijetu visokoprotočne <a class="underline" href="/glikomika">glycomics</a>.`
      }
    </p>
  </div>

  <div class="gc-12">
    <div class="collaboration-worldwide">
      <h3 class="h5">We collaborate with leading academic and research institutions worldwide.</h3>
    </div>
    <div class="collaboration-partners">
      {#each logos as logo}
        <img src="/partners/{logo}" alt="">
      {/each}
      <div class="cta">asdf</div>
    </div>
  </div>
</div>

