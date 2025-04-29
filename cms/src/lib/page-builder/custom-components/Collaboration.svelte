<svelte:options customElement={{ tag: 'pb-collaboration', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';

  /*let logos = [
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
  ];*/
</script>

<div class="grid grid-large collaboration">
  <div class="gc-12">
    <h2 class="centered" style="max-width: 36ch">
      {
        $language === 'en'
          ? 'We have successfully completed over 40 larger and smaller collaborative projects...'
          : 'Uspješno smo završili više od 40 većih i manjih suradničkih projekata...'
      }
    </h2>
    <picture>
      <source srcset="/partners/projects-mobile.jpg" media="(max-width: 600px)">
      <img src="/partners/projects.jpg" alt="projects">
    </picture>
  </div>
  <div class="gc-12">
    <h2 class="centered" style="max-width: 36ch">
      {
        $language === 'en'
          ? '...and we collaborate with leading academic and research institutions worldwide'
          : '...i surađujemo s vodećim akademskim i istraživačkim institucijama diljem svijeta.'
      }
    </h2>
    <picture>
      <source srcset="/partners/universities-mobile.jpg" media="(max-width: 600px)">
      <img src="/partners/universities.jpg" alt="universities">
    </picture>
  </div>
</div>

<!--
<div class="grid grid-large collaboration">
  <div class="gc-12">
    <h2 class="h3">
      {$language === 'en' ?
        'Success through collaboration' :
        'Uspjeh kroz kolaboracije'
      }
    </h2>
  </div>
  <div class="gc-12">
    <p class="collaboration-text">
      {@html
        $language === 'en' ?
          `With over 40 larger and smaller collaborative <a class="underline" href="/projects">projects</a> and over 300 <a class="underline" href="/projects">publications</a>, Genos is a global leader in high-throughput <a class="underline" href="/glycomics">glycomics</a>.` :
          `S više od 40 većih i manjih suradničkih projekata i preko 300 znanstvenih publikacija, Genos je među vodećima u svijetu visokoprotočne glikomike.`
      }
    </p>
  </div>

  <div class="gc-12">
    <div class="collaboration-worldwide">
      <h3 class="h5">
        {@html
          $language === 'en' ?
            'We collaborate with leading academic and research institutions worldwide.' :
            `S više od 40 većih i manjih suradničkih projekata i preko 300 znanstvenih publikacija, Genos je među vodećima u svijetu visokoprotočne glikomike.`
        }
      </h3>
    </div>
    <div class="collaboration-partners">
      {#each logos as logo}
        <img src="/partners/{logo}" alt="">
      {/each}
    </div>
  </div>

  <div class="gc-12">
    <div class="flex justify-center items-center">
      <img src="/icons/arrow_forward_green.svg" alt="" class="arrow-big">
      <img src="/icons/arrow_forward_green.svg" alt="" class="arrow-big">
      <img src="/icons/arrow_forward_green.svg" alt="" class="arrow-big">
      <a class="cta-arrows green" href="{$language === 'en' ? '/projects' : '/projekti'}">
        {$language === 'en' ? 'Our projects in details' : 'Naši projekti'}
      </a>
      <img src="/icons/arrow_back_green.svg" alt="" class="arrow-big">
      <img src="/icons/arrow_back_green.svg" alt="" class="arrow-big">
      <img src="/icons/arrow_back_green.svg" alt="" class="arrow-big">
    </div>
  </div>
</div>

-->
