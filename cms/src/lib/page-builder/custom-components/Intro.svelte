<svelte:options customElement={{ tag: 'pb-intro', shadow: 'none' }} />

<script lang="ts">
  export let src: string;
  export let alt: string = "";
</script>

<div class="intro">
  <img src={src} alt={alt} class="intro-bg" />
</div>
