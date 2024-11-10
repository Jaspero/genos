<svelte:options customElement={{ tag: 'asset-select', shadow: 'none' }} />

<script lang="ts">
  import { onDestroy } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { AMService } from '../am.service';

  export let value: string;
  export let path: string;
  export let types: string[];
  export let selectable: string;

  let parentEl: HTMLDivElement;
  let closeEl: HTMLDivElement;
  let assetManager: any;
  let rendered = false;

  const dispatch = createEventDispatcher();

	$: dispatch('input', value);

  function open() {
    if (!parentEl) {
      parentEl = document.createElement('div');

      parentEl.classList.add('gjs-mdl-container');

      const innerEl = document.createElement('div');
      const headerEl = document.createElement('div');
      const contentEl = document.createElement('div');
      const titleEl = document.createElement('div');

      closeEl = document.createElement('div');

      innerEl.classList.add('gjs-mdl-dialog', 'gjs-one-bg', 'gjs-two-color');
      headerEl.classList.add('gjs-mdl-header');
      titleEl.classList.add('gjs-mdl-title');
      titleEl.textContent = 'Select';
      closeEl.textContent = '⨯';
      closeEl.classList.add('gjs-mdl-btn-close');
      closeEl.setAttribute('data-close-modal', '');
      contentEl.classList.add('gjs-mdl-content');

      assetManager = document.createElement('jp-asset-manager') as any;

      assetManager.service = new AMService();
      assetManager.rootPath = path;
      assetManager.types = types;
      assetManager.selectable = selectable;

      innerEl.appendChild(headerEl);
      headerEl.appendChild(titleEl);
      headerEl.appendChild(closeEl);
      innerEl.appendChild(contentEl);
      contentEl.appendChild(assetManager);

      parentEl.appendChild(innerEl);
    }

    closeEl.addEventListener('click', () => {
      document.body.removeChild(parentEl);
      rendered = false;
    });

    assetManager.addEventListener('selected', (event: { detail: { url: string } }) => {
      value = event.detail.url;
      document.body.removeChild(parentEl);
      rendered = false;
    });

    document.body.appendChild(parentEl);
    rendered = true;
  }

  onDestroy(() => {
    if (rendered) {
      document.body.removeChild(parentEl);
    }
  });
</script>

<div class="relative">
  <input type="text" bind:value />
  <button
    class="absolute top-0 right-0 cursor-pointer z-[1] bg-[#F2F2F2] h-[33px]"
    type="button"
    on:click={open}
  >
    <span class="material-symbols-outlined p-[6px]">folder_open</span>
  </button>
</div>
