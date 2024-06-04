<svelte:options
  customElement={{
    tag: 'column-select',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { doc, updateDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { db } from '../utils/firebase';

  export let value: string;
  export let collection: string;
  export let id: string;
  export let key: string;

  let options: Array<{ value: string; label: string }> = [];

  async function change(event: Event) {
		value = (event.target as HTMLSelectElement).value;
    await updateDoc(doc(db, collection, id), { [key]: value });
  }

  onMount(() => {
    if (window.columnSelects?.[id]) {
      options = window.columnSelects[id] || [];
    }
  });
</script>

<select on:change={change} {value}>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>
