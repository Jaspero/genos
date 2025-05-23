<script lang="ts">
  import Button from '$lib/Button.svelte';

  export let label = '';
  export let variant: 'outlined' | 'filled' | 'icon' | 'default' = 'default';

  let open = false;
  let bindingElement: HTMLDivElement;
  let menuStyle: string;

  function toggleMenu() {
    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const availableSpaceAbove = rect.top;
    const sidebarWidth = 255;
    const availableSpaceLeft = rect.left - sidebarWidth;
    const dropdownWidth = 200;
    const menuHeight = 300;

    let style = '';

    if (availableSpaceBelow >= menuHeight || availableSpaceBelow >= availableSpaceAbove) {
      style += `top: ${rect.bottom - 40}px;`;
      style += `max-height: ${availableSpaceBelow + 100}px;`;
    } else {
      style += `bottom: ${window.innerHeight - rect.top - 100}px;`;
      style += `max-height: ${availableSpaceAbove}px;`;
    }

    if (availableSpaceLeft > dropdownWidth) {
      style += `right: ${window.innerWidth - rect.left + 20}px;`;
    } else {
      style += `left: ${rect.right + 20}px;`;
    }

    menuStyle = style;
    open = !open;

    if (!open) {
      setTimeout(() => {
        bindingElement?.focus();
      }, 100);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (open) {
      if (event.key === 'Escape') {
        toggleMenu();
        bindingElement?.focus();
        return;
      }
    }
  }
</script>

<div class="button-container" bind:this={bindingElement}>
  <Button type="button" {variant} on:click={toggleMenu}>
    {label}
    <div class="arrow" class:rotate={open}>
      <span class="material-symbols-outlined"> more_vert </span>
    </div>
  </Button>
</div>

{#if open}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="overlay" on:click={toggleMenu} on:keydown={handleKeydown} tabindex="-1" role="dialog">
    <div class="menu" style={menuStyle}>
      <slot />
    </div>
  </div>
{/if}

<style lang="postcss">
  .button-container {
    display: flex;
    align-items: center;
  }

  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-radius: 0.5rem;
    box-shadow: 0 3px 12px 3px rgba(0, 0, 0, 0.16);
    background-color: white;
  }

  .arrow {
    width: 24px;
    height: 24px;
    transition: transform 0.5s ease-in-out;
  }

  .rotate {
    transform: rotate(-180deg);
  }
</style>
