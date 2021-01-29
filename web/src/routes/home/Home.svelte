<script>
  export let data;

  const {members, testimonials} = data;
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

  .gg-member-card {
    position: relative;
    text-align: center;
    padding: 20px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: .2s;
  }

  .gg-member-card:after {
    content: url("/images/icon-search.svg");
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: .2s;
  }

  .gg-member-card:hover {
    box-shadow: 0 4px 10px 0 rgba(0,0,0,.28);
    background: white;
    border: 1px solid rgba(0,0,0,.12);
  }

  .gg-member-card:hover::after {
    opacity: 1;
  }

  .gg-member-avatar {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 50%;
    padding: 5px;
  }

  .gg-member-avatar img {
    border-radius: 50%;
    width: 150px;
    min-width: 150px;
    height: 150px;
    min-height: 150px;
  }

  .gg-single-member-dialog {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.75);
  }

  .gg-single-member {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    max-width: 80vw;
    max-height: 80vh;
    overflow: auto;
    margin: auto;
    display: flex;
    border-radius: 8px; }
  @media (max-width: 1200px) {
    .gg-single-member {
      flex-direction: column;
      max-width: 96vw;
      max-height: 96vh; } }

  .gg-single-member-avatar {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 5px;
    margin-top: 70px; }
  @media (max-width: 1200px) {
    .gg-single-member-avatar {
      margin-top: 0; } }

  .gg-single-member-avatar > img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    min-width: 150px;
    min-height: 150px; }

  .gg-single-member-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }


  .item {
    display: none;
  }

  .item.active {
    display: block;
  }
  .team {
    height: 600px;
  }
  .arrow {
    cursor: pointer;
    height: 30px;
  }
</style>

<svelte:head>
  <title>Genos</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
</svelte:head>
