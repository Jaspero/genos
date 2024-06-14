<script>
  import Cta from '$lib/Cta.svelte';
  import Section from '$lib/Section.svelte';
</script>

<Section bg="/images/publications/filled-rectangle.svg" bgAlt="filled rectangle in background"
         decoration="/images/publications/outlined-rectangles.svg" decorationAlt="outlined rectangles in background">
  <slot slot="title">
    <h1>GENOS <br> <span class="text-[#4095BF]">publications</span></h1>
  </slot>

  <p class="text-sm max-w-[36ch] ml-auto mt-16 sm:mt-24">
    Genos has been on the forefront of glyco science. We’ve published over 150 publications over the course of 20 years. We continue to do this up to date, and we’re looking forward to future developments in our research field.
  </p>
</Section>

<div class="w-full max-w-7xl ml-auto mt-40">
  <div class="relative flex flex-col border-l-4 border-l-[#032130] pl-16 gap-12">
    <a href="/" class="publication border-4 group">
      <h2 class="publication-title">Systems Glycobiology: Immunoglobulin G Glycans as Biomarkers and Functional Effectors in Aging and Diseases</h2>
      <span class="fake-link">View reference</span>
    </a>
    <a href="/" class="publication border-4 group">
      <h2 class="publication-title">Systems Glycobiology: Immunoglobulin G Glycans as Biomarkers and Functional Effectors in Aging and Diseases</h2>
      <span class="fake-link">View reference</span>
    </a>
    <a href="/" class="publication border-4 group">
      <h2 class="publication-title">Systems Glycobiology: Immunoglobulin G Glycans as Biomarkers and Functional Effectors in Aging and Diseases</h2>
      <span class="fake-link">View reference</span>
    </a>
  </div>
</div>

<div class="mt-40">
  <Cta />
</div>

<style lang="postcss">
  .publication {
      @apply p-12;
  }

  .publication-title {
      @apply text-sm mb-8;
  }

  .fake-link {
      @apply text-sm font-bold underline sm:no-underline group-hover:underline;
  }

  .publication:first-child {
      border-color: #4095BF;
      background-color: #D9EAF2;
  }

  .publication:first-child .fake-link {
      color: #4095BF;
  }

  .publication:nth-child(2) {
      border-color: #FF8000;
      background-color: #FFE5CC;
  }

  .publication:nth-child(2) .fake-link {
      color: #FF8000;
  }

  .publication:last-child {
      border-color: #40BFBF;
      background-color: #D9F2F2;
  }

  .publication:last-child .fake-link {
      color: #40BFBF;
  }
</style>