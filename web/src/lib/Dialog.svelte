<script lang="ts">
  import { clickOutside } from '$lib/utils/click-outside.ts';
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import { browser } from '$app/environment';

  export let showing = false;
  export let showClose = true;
  export let src = '';
  export let alt = '';
  export let fullScreen = false;
  export let contentfull = false;
  export let removeMinW = false;
  export let buttonOutside = false;

  const dispatch = createEventDispatcher();

  function close() {
    showing = false;
    dispatch('closed');
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && showClose) {
      close();
    }
  }

  $: if (browser && showing) {
    document.documentElement.classList.add('scroll-disabled');
  } else if (browser) {
    document.documentElement.classList.remove('scroll-disabled');
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if showing}
  {#if !fullScreen}
    <div class="blurred-bg" transition:fade={{ duration: 200 }}></div>
  {/if}
  <div
    class="dialog"
    class:fullscreen={fullScreen}
    class:min-w-0={removeMinW}
    class:button-outside={buttonOutside}
    transition:fade={{ duration: 200 }}
    use:clickOutside
    on:click_outside={close}
  >
    {#if src}
      <img {src} {alt} />
    {/if}
    <div class="dialog-content" class:contentfull>
      <slot />
    </div>
    <button type="button" class="dialog-close" on:click={close}>
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
{/if}

<style>
  .blurred-bg {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);
  }

  .dialog {
    z-index: 10004;
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 600px;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    overflow-y: auto;
  }
  .dialog-content {
    padding: 0;
  }

  .dialog-close {
    position: absolute;
    top: -1rem;
    right: -1rem;
    background-color: white;
    border: 1px solid red;
  }

  .fullscreen {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transform: translate(0);
  }

  .dialog-content {
    width: 100%;
    padding: 3rem;
    overflow-y: auto;
  }

  .dialog-close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.25s;
  }
  .dialog-close:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }

  .contentfull {
    width: 100%;
  }

  .min-w-0 {
    min-width: unset;
  }
  @media (max-width: 600px) {
    .dialog-content {
      width: 100%;
      padding: 1.5rem;
    }
    .dialog {
      width: 80%;
      height: auto;
      max-height: 90%;
      min-width: unset;
    }
    img {
      display: none;
    }
  }
</style>
