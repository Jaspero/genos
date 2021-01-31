<script>
  export let data;
</script>

<section class="gg-intro">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">News<span class="gg-icon" aria-hidden="true"><img src="/images/icon-news.svg" /></span></h4>
    </div>
  </div>
</section>

<section class="p-y-l">
  <div class="grid">
    <div class="col-12">
      <div class="gg-post">
        <div class="gg-post-minor">
          <p class="fw-bold p-t-s m-b-s">{data.title}</p>
          <p class="fs-small c-d-secondary">{new Date(data.createdOn).toLocaleDateString('en-GB')}}</p>
          {#if data.image}
            <img class="m-y-s" src={data.image} alt="News Image">
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
    background-image: url("/images/section-news.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>{data.title} | Genos</title>
  <meta name="description" content="{data.content}" />
</svelte:head>
