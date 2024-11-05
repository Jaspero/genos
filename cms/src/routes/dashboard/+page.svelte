<script lang="ts">
  import Grid from '$lib/Grid.svelte';
  import { CONFIG } from '$lib/consts/config.const';
</script>

<section>
  <Grid></Grid>
</section>

<svelte:head>
  <title>Dashboard - {CONFIG.title}</title>
</svelte:head>
