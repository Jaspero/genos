<svelte:options
  customElement={{
    tag: 'array-element',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import FormModule from '../FormModule.svelte';
  import Button from '../Button.svelte';

  export let items: any[];
  export let value: any[] = [];
  export let label: string;
  export let addLabel = 'Add';
  export let showAdd = true;

  export function getValue() {
    return value;
  }

  const dispatch = createEventDispatcher();

  function add() {
    value = [...value, {}];
    change();
  }

  function remove(index: number) {
    value = value.filter((_, i) => i !== index);
    change();
  }

  function change() {
    dispatch('value', { value });
  }
</script>

<div class="flex justify-between">
  {#if label}
    <h2 class="font-bold">{label}</h2>
  {/if}
  {#if showAdd}
    <Button on:click={add}>{addLabel}</Button>
  {/if}
</div>

{#each value as v}
  <div class="flex gap-2">
    <FormModule {items} bind:value={v} />
    <Button variant="outlined" color="warn" on:click={() => remove(value.indexOf(v))}>Remove</Button
    >
  </div>
{/each}
