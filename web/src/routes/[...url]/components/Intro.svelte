<svelte:options customElement={{ tag: 'pb-intro', shadow: 'none' }} />

<script lang="ts">
  let { src, alt = '' }: { src: string; alt?: string } = $props();

  /*
   * The page HTML already contains the photo (added when the page is built, see fixCmsHtml in
   * +page.server.ts), so it shows before the app starts. Only draw it here if it is missing.
   */
  const host = $host<HTMLElement>();
  const prerendered = !!host?.querySelector(':scope > img.intro-bg');
</script>

{#if !prerendered}
  <img {src} {alt} class="intro-bg" />
{/if}
