<script>
  import Member from '../../components/team/Member.svelte';

  export let data;

  const {members} = data;

</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Our team<span class="gg-icon" aria-hidden="true"><img src="/images/icon-team.svg" /></span></h4>
    </div>
  </div>
</section>

<section class="bg-l-secondary team p-y-l">
  <div class="grid p-b-m">
    <div class="col-12 flex jc-between ai-center">
      <h4 class="gg-title">Genos team</h4>
    </div>
    {#each members as member, i}
      <div class="col-3 col-m-4 col-s-6 col-xs-12 p-a-s ta-center">
        <Member hydrate-client={{member}}>
      </div>
    {/each}
  </div>
</section>

<svelte:head>
  <title>Naš Tim | Genos</title>
  <meta name="description" content="Experienced team of scientists in Genos have cumulatively over 150 years of experience in glycan analysis." />
</svelte:head>

<style>
  .gg-intro {
    padding: 200px 0 120px;
    background-image: url("/images/section-intro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
