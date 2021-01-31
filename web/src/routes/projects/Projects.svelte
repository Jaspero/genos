<script>
  import ProjectList from '../../components/projects/ProjectList.svelte';

  export let data;
  const {shared} = data;
</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Projects<span class="gg-icon" aria-hidden="true"><img src="/images/icon-news.svg" /></span></h4>
    </div>
  </div>
</section>

<ProjectList hydrate-client={{projects: shared.projects.slice(0, 11)}} />

<style>
  .gg-intro {
    padding: 200px 0 60px;
    background-image: url("/images/section-news.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>Projekti | Genos</title>
  <meta name="description" content="Genos is participating in numerous large international and bilateral industrial R&D projects. If you want to see the whole picture, include glycans in your study." />
</svelte:head>
