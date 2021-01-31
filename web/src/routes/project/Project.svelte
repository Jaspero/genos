<script>
  export let data;
</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Projects<span class="gg-icon" aria-hidden="true"><img src="/images/icon-project.svg" alt="Projects icon" /></span></h4>
    </div>
  </div>
</section>

<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">{data.title}<a rel="prefetch" href="projekti" class="gg-icon"><img src="/images/icon-nav-left.svg" alt="Nazad" aria-label="Nazad" /></a></h4>
    </div>
    <div class="col-12">
      <div class="gg-post">
        <div class="gg-post-minor">
          {#if data.image}
            <img class="m-b-s" src="{data.image}" alt="Project Image">
          {/if}
        </div>
        <div class="gg-post-major p-t-s gg-read-format">
          {@html data.content}
        </div>
      </div>
    </div>
  </div>
</section>


<style>
  .gg-intro {
    padding: 200px 0 60px;
    background-image: url("/images/section-projects.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>{data.title} | Genos</title>
  <meta name="description" content="{data.excerpt}" />
</svelte:head>
