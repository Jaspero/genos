<script lang="ts">
  export let bg = '';
  export let bgAlt = '';
  export let decoration = '';
  export let decorationAlt = '';
</script>

<section>
  <img class="bg" src={bg} alt={bgAlt} aria-hidden="true">

  <div class="title-container">
    <div class="title">
      <slot name="title" />
    </div>
    {#if decoration}
      <img class="decoration" src={decoration} alt={decorationAlt} aria-hidden="true">
    {/if}
  </div>

  <div class="content">
    <slot />
  </div>
</section>

<style lang="postcss">
    section {
        @apply relative -mx-16 sm:-mx-24 md:-mx-40;
    }

    .bg {
        @apply absolute top-0 left-0 -z-[1] w-1/2 sm:w-[unset] max-w-[50%];
    }

    .decoration {
        @apply -z-[1] absolute bottom-0 right-20 w-1/4 max-w-[400px];
    }

    .title-container {
        @apply relative flex justify-between gap-24;
    }

    .title {
        @apply px-24 pt-40 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight max-w-[24ch] sm:max-w-[100%];
    }

    .content {
        @apply px-16 sm:px-24 md:px-40 mt-40;
    }
</style>