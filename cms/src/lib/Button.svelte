<script lang="ts">
  import { onMount, tick } from 'svelte';

  export let variant: 'filled' | 'outlined' | 'ghost' | 'underlined' | 'icon' = 'filled';
  export let color: 'primary' | 'secondary' | 'warn' | 'error' = 'primary';
  export let hfull: boolean = false;

  /* Anchor */
  export let href = '';
  export let target = '';
  export let rel = '';

  /* Button */
  export let disabled = false;
  export let loading = false;
  export let form: string | null = null;
  export let type: 'button' | 'submit' | 'reset' = 'button';

  /* Other */
  let containerElement: HTMLDivElement;
  let bindingElement: HTMLButtonElement | HTMLAnchorElement;
  let ariaLabel: string | null = null;

  const rippleExpand = [
    { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
    { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
  ];

  const rippleTiming = {
    duration: 600,
    iterations: 1
  };

  function ripple(event: MouseEvent) {
    const targetElement = (event.target as HTMLElement).closest('.button');
    if (!targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.width = `${width}px`;
    ripple.style.height = `${width}px`;
    ripple.style.background = 'var(--ripple-color)';
    ripple.style.borderRadius = '50%';

    targetElement.appendChild(ripple);
    ripple.animate(rippleExpand, rippleTiming);

    setTimeout(() => {
      ripple.remove();
    }, 590);
  }

  $: properties = {
    class: [
      'button',
      variant == 'filled' && 'variant-filled',
      variant == 'outlined' && 'variant-outlined',
      variant == 'ghost' && 'variant-ghost',
      variant == 'underlined' && 'variant-underlined',
      variant == 'icon' && 'variant-icon',
      color == 'primary' && 'color-primary',
      color == 'secondary' && 'color-secondary',
      color == 'error' && 'color-error',
      color == 'warn' && 'color-warn',
      hfull && 'h-full'
    ]
      .filter(Boolean)
      .join(' ')
  };

  function updateAriaLabel() {
    if (bindingElement) {
      ariaLabel = bindingElement.textContent!.trim();
    }
  }

  function handleRippleEvent(event: MouseEvent) {
    // Check if the clicked element is a button or a link with ripple
    ripple(event);
  }

  onMount(async () => {
    containerElement.addEventListener('click', handleRippleEvent);

    await tick(); // Wait for DOM to update
    updateAriaLabel();
  });
</script>

<div class="h-10" bind:this={containerElement}>
  {#if href}
    <a
      {...properties}
      {...$$restProps.class}
      {href}
      {target}
      {rel}
      aria-label={ariaLabel}
      on:click
      bind:this={bindingElement}
    >
      <slot />
    </a>
  {:else}
    <button
      {...properties}
      {...$$restProps.class}
      class:loading
      {disabled}
      {form}
      {type}
      aria-label={ariaLabel}
      on:click
      bind:this={bindingElement}
    >
      <slot />
      <div class="spin-wrapper">
        <span class="spinner"></span>
      </div>
    </button>
  {/if}
</div>

<style lang="postcss">
  .button {
    @apply relative transition-all overflow-hidden inline-block h-10;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 2.5rem;
  }

  .button:not(.variant-icon) {
    @apply px-4;
  }

  .button:not(.variant-filled, .variant-outlined, .variant-ghost, .variant-underlined) {
    @apply w-10;
  }

  .spinner {
    display: none;
    width: 18px;
    height: 18px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotate 1s linear infinite;
  }

  .spin-wrapper {
    display: none;
  }

  .loading {
    @apply pointer-events-none;
  }

  .loading {
    .spin-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: inherit;
      z-index: 0;
    }
    .spinner {
      display: block;
      z-index: 1;
    }
  }

  /* Button - Filled */
  .button.variant-filled.color-primary {
    background-color: var(--primary-color);
    color: var(--primary-contrast-color);
    transition: background-color ease-in 0.2s;
    &:hover {
      background-color: var(--hover-color);
    }
  }
  .button.variant-filled.color-secondary {
    background-color: var(--secondary-color);
    color: var(--secondary-contrast-color);
    transition: background-color ease-in 0.2s;
    &:hover {
      background-color: #3a56bb;
    }
  }
  .button.variant-filled.color-warn {
    background-color: var(--warn-color);
    color: var(--warn-contrast-color);
  }
  .button.variant-filled.color-error {
    background-color: var(--error-color);
    color: var(--error-contrast-color);
  }

  /* Button - Outlined */
  .button.variant-outlined.color-primary {
    box-shadow: inset 0 0 0 var(--border-width) var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
    transition: background-color ease-in 0.2s;
    &:hover {
      background-color: var(--hover-color);
      color: var(--primary-contrast-color);
    }
  }
  .button.variant-outlined.color-secondary {
    box-shadow: inset 0 0 0 var(--border-width) var(--secondary-color);
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }
  .button.variant-outlined.color-warn {
    box-shadow: inset 0 0 0 var(--border-width) var(--warn-color);
    border-color: var(--warn-color);
    color: var(--warn-color);
  }
  .button.variant-outlined.color-error {
    box-shadow: inset 0 0 0 var(--border-width) var(--error-color);
    border-color: var(--error-color);
    color: var(--error-color);
  }

  /* Button - Ghost */
  .button.variant-ghost.color-primary {
    color: var(--primary-color);
  }
  .button.variant-ghost.color-secondary {
    color: var(--secondary-color);
  }
  .button.variant-ghost.color-warn {
    color: var(--warn-color);
  }
  .button.variant-ghost.color-error {
    color: var(--error-color);
  }

  /* Button - Underlined */
  .button.variant-underlined {
    border-bottom-width: var(--border-width);
    border-bottom-style: solid;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .button.variant-underlined.color-primary {
    border-color: var(--primary-color);
  }
  .button.variant-underlined.color-secondary {
    border-color: var(--secondary-color);
  }
  .button.variant-underlined.color-warn {
    border-color: var(--warn-color);
  }
  .button.variant-underlined.color-error {
    border-color: var(--error-color);
  }

  /* Button - Icon */
  .button.variant-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
