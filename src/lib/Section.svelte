<script lang="ts">
  export let bg = '';
  export let bgAlt = '';
  export let decoration = '';
  export let decorationAlt = '';
</script>

<section>
  <img class="bg" src={bg} alt={bgAlt} aria-hidden="true">
  {#if decoration}
    <img class="decoration" src={decoration} alt={decorationAlt}>
  {/if}

  <div class="title">
    <slot name="title" />
  </div>

  <div class="content">
    <slot />
  </div>
</section>

<style lang="postcss">
    section {
        @apply relative -mx-24 sm:-mx-40;
    }

    .bg {
        @apply absolute top-0 left-0 -z-[1] w-1/2 sm:w-[unset];
    }

    .decoration {
        @apply absolute right-20 -z-[1];
    }

    .title {
        @apply px-24 pt-60 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight max-w-[24ch] sm:max-w-[100%];
    }

    .content {
        @apply px-16 sm:px-24 md:px-40;
    }
</style>