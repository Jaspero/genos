<script lang="ts">
  import type { Editor } from 'grapesjs';
  import { confirmation } from '../utils/confirmation';
  import { DEVICES } from './consts/devices.const';
  import {infoDialog} from './stores/info-dialog.store';
  import Dialog from '../Dialog.svelte';

  export let grapesInstance: Editor;
  export let activeDevice = DEVICES[0].id;
  export let gridVisible = true;

  let fileEl: HTMLInputElement;
  let infoOpen = false;
  let infoProps: Array<{
    name: string;
    value: string;
  }>;

  $: if ($infoDialog) {
    infoProps = $infoDialog;
    infoOpen = true;
  } else {
    infoOpen = false;
  }

  function setDevice(device: string) {
    grapesInstance.setDevice(device);
    activeDevice = device;
  }

  function toggleGrid() {
    if (gridVisible) {
      grapesInstance.Commands.stop('core:component-outline');
    } else {
      grapesInstance.Commands.run('core:component-outline');
    }

    gridVisible = !gridVisible;
  }

  function importHtml(event: any) {
    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    const reader = new FileReader();

    reader.readAsText(event.target.files[0], 'UTF-8');
    reader.onload = (evt) => {
      grapesInstance.setComponents(evt.target!.result as string);
    };
  }

  function clearPage() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      grapesInstance.runCommand('core:canvas-clear');
    }, 'Clear the page?');
  }
</script>

<header>
  <div class="flex justify-start w-full gap-1">
    <slot />
  </div>
  <div class="flex justify-between w-full">
    <div>
      {#each DEVICES as device}
        <button
          title={device.id}
          class="material-symbols-outlined"
          class:active={activeDevice === device.id}
          on:click={() => setDevice(device.id)}>{device.icon}</button
        >
      {/each}
    </div>
    <div>
      <slot name="right" />
      <button
        title="Toggle Grid"
        class="material-symbols-outlined"
        class:active={gridVisible}
        on:click={toggleGrid}>select_all</button
      >
      <button
        title="Undo"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('core:undo')}>undo</button
      >
      <button
        title="Redo"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('core:redo')}>redo</button
      >
      <button
        title="View Code"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('export-template')}>code</button
      >
      <button title="Import HTML" class="material-symbols-outlined" on:click={() => fileEl.click()}
        >html</button
      >
      <button title="Clear Page" class="material-symbols-outlined" on:click={clearPage}>
        delete
      </button>
    </div>
  </div>
</header>

<input type="file" bind:this={fileEl} on:change={importHtml} hidden />

<Dialog bind:open={infoOpen}>
  <svelte:fragment slot="title">Component Information</svelte:fragment>

  <table class="w-full text-left border-collapse">
    <tbody>
      {#each infoProps as prop}
        <tr>
          <th class="p-2 border">{prop.name}</th>
          <td class="p-2 border">{prop.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</Dialog>

<style lang="postcss">
  header {
    @apply bg-white border-b;
    height: 55px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  .material-symbols-outlined {
    @apply hover:bg-primary/[8%] duration-200;
    padding: 0.2rem;
  }

  .material-symbols-outlined.active {
    @apply bg-primary/[8%] text-secondary;
  }
</style>
