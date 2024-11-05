<svelte:options
  customElement={{
    tag: 'title-element',
    shadow: 'none'
  }}
/>

<script lang="ts">
  export let title: string;
  export let size: '2' | '3' | '4' | '5' | '6' = '3';
</script>

{#if size === '2'}
  <h2>{title}</h2>
{:else if size === '3'}
  <h3>{title}</h3>
{:else if size === '4'}
  <h4>{title}</h4>
{:else if size === '5'}
  <h5>{title}</h5>
{:else if size === '6'}
  <h6>{title}</h6>
{/if}

<style>
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
</style>
