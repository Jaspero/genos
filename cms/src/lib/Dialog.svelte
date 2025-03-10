<script lang="ts">
  import Button from './Button.svelte';
  import { clickOutside } from './utils/click-outside';
  import { browser } from '$app/environment';

  export let open: boolean;
  export let removePadding = false;
  export let fixed = false;
  export let onClose: (() => void) | null = null;

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function close() {
    if (fixed) {
      return;
    }

    onClose && onClose();
    open = false;
  }

  $: if (browser && open) {
    document.documentElement.classList.add('scroll-disabled');
  } else if (browser) {
    document.documentElement.classList.remove('scroll-disabled');
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if open}
  <div class="overlay">
    <div class="dialog" use:clickOutside on:click_outside={close}>
      {#if $$slots.title}
        <div class="dialog-header">
          <h1 class="text-2xl font-bold">
            <slot name="title" />
          </h1>
        </div>
      {/if}

      {#if $$slots.default}
        <div class="dialog-content {removePadding ? '' : 'p-6'}">
          <slot />
        </div>
      {/if}

      <div class="dialog-actions">
        {#if $$slots.actions}
          <div class="flex gap-4">
            <slot name="actions" />
            <Button variant="outlined" color="warn" on:click={close}>Close</Button>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .overlay {
    @apply z-50 fixed top-0 right-0 bottom-0 left-0 bg-black/25 flex justify-center items-center;
  }

  .dialog {
    @apply bg-white border rounded-xl overflow-hidden divide-y shadow-2xl lg:min-w-[540px];
  }

  .dialog-header {
    @apply p-6;
  }

  .dialog-actions {
    @apply p-6 flex justify-between flex-wrap gap-4;
  }
</style>
