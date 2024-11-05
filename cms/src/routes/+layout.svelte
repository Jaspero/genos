<script lang="ts">
  import '../app.pcss';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import '$lib/utils/firebase';
  import '$lib/web-component-dependencies';

  let loading = false;

  beforeNavigate(() => {
    loading = true;
  });

  afterNavigate(() => {
    loading = false;
  });
</script>

{#if loading}
  <div class="loader bg-secondary">
    <div class="loader-inner bg-secondary/5"></div>
  </div>
{/if}

<slot />

<style lang="postcss">
  @keyframes rotating {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  @keyframes delay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    height: 4px;
    z-index: 21;
    animation-delay: 5s;
    animation: delay 0.3s linear;
    animation-fill-mode: forwards;
  }

  .loader-inner {
    position: absolute;
    width: 30%;
    height: 100%;
    animation: rotating 2s linear infinite;
  }
</style>
