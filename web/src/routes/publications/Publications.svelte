<script>
  import PubTable from '../../components/publications/PubTable.svelte';

  export let data;

  const {publications} = data;
</script>

<section class="gg-publications-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">
        Publications
        <span class="gg-icon" aria-hidden="true">
            <img src="/images/icon-publication.svg" />
        </span>
      </h4>
    </div>
  </div>
</section>

<PubTable hydrate-client={{publications}} />

<style>
  .gg-intro {
    padding: 200px 0 60px;
    background-image: url("/images/section-publications.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>Publikacije | Genos</title>
  <meta name="description" content="Researchers in Genos participated in numerous clinical and epidemiological studies and published over 100 papers in leading journals" />
</svelte:head>
