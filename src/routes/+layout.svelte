<script>
  import "../app.pcss";
  import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main class="mt-24 sm:mt-36 pt-5 mx-24 sm:mx-40">
  <slot />
</main>