<svelte:options customElement={{ tag: 'pb-we-are', shadow: 'none' }} />

<script>
  import {language} from '$lib/stores/language';
</script>

<div class="grid grid-large gap-16 items-center spacer">
  <div class="gc-6 flex flex-col gap-4">
    <h2 class="h2 font-bold max-w-[24ch]">Global Leaders in High-Throughput Glycomics</h2>
    <p class="h4">
      With decades of research and innovation behind us, our team of world-renowned scientists conducts over 80% of all glycan analyses globally.
      <br><br>
      From pioneering discoveries to advancing clinical applications, we’re at the forefront of unlocking the power of glycans to transform health.
    </p>
    <div>
      <a href="/team" class="button-outlined">Our team</a>
    </div>
  </div>
  <div class="gc-6">
    <img src="/images/team.jpg" alt="" class="rounded-lg">
  </div>
</div>

<!--
<div class="spacer grid grid-large we-are">
  <div class="gc-6 gc-xs-12">
    <img src="/images/team.jpg" alt="">
  </div>
  <div class="gc-6 gc-xs-12 p-8">
    <h2 class="h4">
      {#if $language === 'en'}
        We are a <a class="link" href="/team">team</a> of leading experts in glycoscience, conducting <a class="link" href="https://www.researchgate.net/institution/Genos-Ltd" target="_blank" rel="noreferrer noopener">80%</a> of the global analyses in our lab.
      {:else}
        Mi smo <a class="link" href="/tim">tim</a> vodećih stručnjaka u glikoznanosti, a u našem laboratoriju provodimo <a class="link" href="https://www.researchgate.net/institution/Genos-Ltd" target="_blank" rel="noreferrer noopener">80%</a> svih analiza na globalnoj razini.
      {/if}
    </h2>
  </div>
</div>-->
