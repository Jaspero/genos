<svelte:options customElement={{ tag: 'pb-we-are', shadow: 'none' }} />

<script>
  import {language} from '$lib/page-builder/stores/language';
</script>

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
</div>