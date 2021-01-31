<script>
  import OurTeam from '../../components/home/OurTeam.svelte';

  export let data;

  const {publications, projects, news, members, services} = data;
</script>

<!--Intro-->
<section class="gg-section-intro">
  <div class="grid">
    <div class="col-12">
      <div class="gg-intro-content">
        <img src="/images/logo-light.svg" alt="Genos" width="220">
        <h1 class="gg-intro-title">SEE THE<br>COMPLETE<br>PICTURE.</h1>
      </div>
    </div>
  </div>
</section>

<!--About-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">About us</h4>
    </div>
    <div class="col-12"></div>
    <div class="col-6 col-s-12">
      <p class="p-r-m m-b-m">Glycans are complex oligosaccharides covalently attached to the backbone of proteins. They significantly contribute to the structure and function of the majority of proteins. Changes in glycans have been reported in many inflammatory diseases, autoimmune diseases and in cancer where they reflect disease activity, or in some cases even precede the development of disease.</p>
    </div>
    <div class="col-6 col-s-12">
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="/images/icon-team.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Global leader in glycomics</h6>
          <p>
            The field of high-throughput glycomics was opened with our 2008 study of total plasma glycome on over 1,000 individuals from the Croatian island Vis. Today we have over 10 years of experience in glycomics, over 100 research publications and more than 30 scientists completely devoted to answering opened questions about glycans and their functional roles in biology.
          </p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="/images/icon-publication.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Research</h6>
          <p>
            The knowledge about glycans is lagging significantly behind the knowledge about DNA and proteins and through multiple bilateral and multilateral research projects, including the Human Glycome Project, we are trying to narrow this gap. We are proud to be able to collaborate with leading scientists and contribute glycan data to some of the best clinical and epidemiological cohorts in the World (including TwinsUK, 10001 Dalmatians, ORCADES, EPIC, KORA, Finrisk, SABRE, etc)
          </p>
        </div>
      </div>
      <div class="flex ai-start m-b-m">
        <span class="gg-icon" aria-hidden="true"><img src="/images/icon-service.svg" alt=""></span>
        <div class="p-l-s">
          <h6 class="m-b-xs">Commercial services</h6>
          <p>Our knowledge and expertise is available to any interested party in academia or industry through high-throughput glycan analysis and other commercial services that we offer, ranging from analytical chemistry to study design and statistical data analysis.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!--Featured publications-->
<section class="bg-l-secondary p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Featured publications<span class="gg-icon" aria-hidden="true"><img src="/images/icon-publication.svg" /></span></h4>
    </div>
    <div class="col-12">
      <table class="gg-publications-table">
        <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Reference</th>
          <th>Authors</th>
        </tr>
        </thead>
        <tbody>
        {#each publications as publication}
          <tr>
            <td data-label="Year">{new Date(publication.createdOn).getFullYear()}</td>
            <td data-label="Title">{publication.title}</td>
            <td data-label="Reference">
              {#if publication.link}
                <a class="link" href={publication.link} rel="noopener" target="_blank">{publication.description}</a>
              {:else}
                {publication.description}
              {/if}
            </td>
            <td data-label="Authors">{publication.authors}</td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" href="publikacije">View all publications</a>
      </div>
    </div>
  </div>
</section>

<!--Services-->
<section class="gg-section-services bg-d-primary c-l-secondary p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title c-l-primary">Services<span class="gg-icon" aria-hidden="true"><img src="/images/icon-service.svg" /></span></h4>
    </div>
    <div class="col-12">
      <ul>
        {#each services as service}
          <li>{service}</li>
        {/each}
      </ul>
    </div>
    <div class="col-12">
      <div class="p-y-xs p-l-m">
        <a class="link c-l-primary" href="usluge">Learn more about our services</a>
      </div>
    </div>
  </div>
</section>

<!--Recent projects-->
<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Recent projects<span class="gg-icon" aria-hidden="true"><img src="/images/icon-project.svg" /></span></h4>
    </div>
    {#each projects as project}
      <div class="col-6 col-s-12">
        <a class="gg-card" rel="prefetch" href="/projects/{project.id}">
          <p class="m-b-s fw-bold">{project.title}</p>
          <p class="m-b-s">{project.excerpt}</p>
        </a>
      </div>
    {/each}
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" href="projekti">View all projects</a>
      </div>
    </div>
  </div>
</section>

<!--Our team-->
<OurTeam hydrate-client={{members}} />

<section class="bg-l-gradient p-y-l">
  <div class="grid">
    <div class="col-12">
      <h4 class="gg-title">Recent news<span class="gg-icon" aria-hidden="true"><img src="/images/icon-news.svg" /></span></h4>
    </div>
    {#each news as item}
      <div class="col-6 col-s-12">
        <a class="gg-card" rel="prefetch" href="/news/{item.id}">
          <p class="fs-small m-b-xs m-t-s">{new Date(item.createdOn).toLocaleDateString('en-GB')}</p>
          <p class="m-b-s fw-bold">{item.title}</p>
          <p class="m-b-s">{item.subTitle}</p>
        </a>
      </div>
    {/each}
    <div class="col-12">
      <div class="p-y-s ta-center">
        <a class="link c-primary" href="novosti">Learn more about glycans</a>
      </div>
    </div>
  </div>
</section>



<style>
  .gg-section-intro {
    padding: 200px 0 120px;
    background-image: url("/images/section-intro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .gg-intro-content {
    display: flex;
    align-items: start;
  }

  .gg-intro-title {
    font-weight: 400;
    color: white;
    padding: 6px 10px;
    border-left: 2px solid white;
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    .gg-intro-content {
      flex-direction: column;
    }
    .gg-intro-title {
      border-left: none;
      margin-left: 62px;
      border-top: 2px solid white;

    }
  }

  .gg-section-services {
    background-image: url("/images/section-services.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:head>
  <title>Genos</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
</svelte:head>
