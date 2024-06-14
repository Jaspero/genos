<script>
  import "../app.pcss";
  import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main class="mt-24 sm:mt-36 pt-5 px-16 sm:px-24 md:px-40">
  <slot />
</main>