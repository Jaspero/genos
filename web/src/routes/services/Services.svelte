<script>
  import ServiceTabs from '../../components/services/ServiceTabs.svelte';

  export let data;

  const {services} = data;
</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon" aria-hidden="true"><img src="/images/icon-service.svg" alt=""></span></h4>
    </div>
  </div>
</section>

<ServiceTabs hydrate-client={{services}} />

<style>
  .gg-intro {
    padding: 200px 0 60px;
    background-image: url("/images/section-services.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>Usluge | Genos Glyco</title>
  <meta name="description" content="With over 10 years of experience in glycan analysis, experts in Genos can address even the most complex glycoprofiling tasks" />
</svelte:head>
