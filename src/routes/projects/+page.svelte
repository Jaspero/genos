<script>
  import Section from '$lib/Section.svelte';
  import Cta from '$lib/Cta.svelte';
</script>

<Section>
  <slot slot="title">
    <h1>GENOS <br> <span class="text-[#4095BF]">projects</span></h1>
  </slot>

  <p class="text-sm max-w-[36ch] ml-auto mt-40">
    With over 20 large collaborative projects conducted with scientific teams from different research centers from around the world, we have the expertise to design studies and bring them to a successful conclusion.
  </p>
</Section>

<div class="grid grid-cols-12 gap-16">
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
  <div class="col-span-4 project-container">
    <div class="project">
      <div class="project-date">Jul 2020 — Jan 2022</div>
      <h2 class="project-title">GlycoCOVID</h2>
      <p class="project-description">Glycans as biomarkers and functional effectors of severe COVID-19</p>
      <div class="flex-1"></div>
      <span>Download project details • PDF</span>
    </div>
  </div>
</div>

<Cta />

<style lang="postcss">
  .project {
      @apply relative flex flex-col items-start border-4 p-6 min-h-[25rem];
  }

  .project::before,
  .project::after {
      content: '';
      background-color: inherit;
      border-color: inherit;
      border-style: inherit;
      @apply -z-[1] absolute top-0 left-0 w-full h-full border-4 opacity-50 duration-500;
  }

  .project-date {
      @apply bg-black text-white px-3 py-2;
  }

  .project-title {
      @apply font-bold text-2xs mt-4;
  }

  .project-description {
      @apply mt-2;
  }

  .project-container:first-child .project,
  .project-container:last-child .project {
      @apply bg-[#D9EAF2] border-[#4095BF];
  }

  .project-container:nth-child(2) .project {
      @apply bg-[#FFE5CC] border-[#FF8000];
  }

  .project-container:nth-child(3) .project {
      @apply bg-[#E5F2D9] border-[#80BF40];
  }

  .project-container:nth-child(4) .project {
      @apply bg-[#FFF6CC] border-[#FFD400];
  }

  .project-container:nth-child(5) .project {
      @apply bg-[#D9F2F2] border-[#40BFBF];
  }

  .project-container:hover .project::before {
      @apply -rotate-12;
  }

  .project-container:hover .project::after {
      @apply rotate-12;
  }
</style>