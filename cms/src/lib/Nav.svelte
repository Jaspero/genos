<script lang="ts">
  import Button from './Button.svelte';
  import Settings from './Settings.svelte';
  import { sidebarStore } from './stores/sidebar.store';

  export let label: string;

  function toggleSidebar() {
    $sidebarStore = !$sidebarStore;
  }
</script>

<nav class="z-20 relative flex items-center px-6 min-h-[4rem] h-16 border-b bg-white">
  <div class="md:hidden mr-4">
    <Button variant="icon" on:click={toggleSidebar}>
      {#if $sidebarStore}
        <span class="material-symbols-outlined">close</span>
      {:else}
        <span class="material-symbols-outlined">menu</span>
      {/if}
    </Button>
  </div>
  <a href="/dashboard" class="flex items-center gap-2">
    <img src="/brand/logo.svg" alt="Logo" class="h-10" />

    {#if label}
      <p>{label}</p>
    {/if}
  </a>

  <div class="flex-1"></div>

  <div class="ml-12">
    <Settings />
  </div>
</nav>
