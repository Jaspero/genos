<script lang="ts">
  import { auth } from '$lib/utils/firebase';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { clickOutside } from './utils/click-outside';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { sidebarStore } from './stores/sidebar.store';

  export let links: Array<{
    label: string;
    icon: string;
    href: string;
    exactMatch?: boolean;
    links?: Array<{
      label: string;
      href: string;
    }>;
    checked?: boolean;
  }>;

  let dropdown = false;

  $: pathname = $page.url.pathname;

  function closeSidebar() {
    if (typeof window !== undefined && window.innerWidth < 768) {
      $sidebarStore = false;
    }
  }

  async function signOut() {
    await auth.signOut();
    goto('/');
  }

  onMount(() => {
    links = links.map((link) => {
      if (link.links) {
        return {
          ...link,
          checked: pathname.startsWith(link.href)
        };
      }
      return link;
    });
  });
</script>

{#if $sidebarStore}
  <aside class="flex flex-col w-[256px] h-full bg-white gap-1 overflow-y-auto border-r z-[1]">
    {#if links}
      <nav class="flex-1 overflow-y-auto">
        {#each links as link}
          <div
            class="border-t border-t-black/10 first:border-t-0 last:border-b last:border-b-black/10"
          >
            {#if link.links}
              <button
                class="sidebar-dropdown flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
                class:active={pathname.startsWith(link.href)}
                on:click={() => {
                  link.checked = !link.checked;
                }}
              >
                {#if link.icon}
                  <span class="material-symbols-outlined">{link.icon}</span>
                {/if}
                <span class="flex-1 text-left">{link.label}</span>
                <img
                  class="w-6 h-6 transition-transform duration-500"
                  class:-scale-y-100={link.checked}
                  src="/images/expand_more.svg"
                  alt={link.checked ? 'Expand less' : 'Expand more'}
                />
              </button>

              {#if link.checked}
                <div class="flex flex-col px-4" transition:slide>
                  {#each link.links as inner}
                    <a
                      class="dropdown-link flex gap-2 hover:underline py-2 hover:translate-x-2 transition-all"
                      href={inner.href}
                      class:active={pathname.startsWith(inner.href)}
                      on:click={closeSidebar}
                    >
                      <span class="w-6 h-6"></span>
                      {inner.label}
                    </a>
                  {/each}
                </div>
              {/if}
            {:else if link.href}
              <a
                class="sidebar-link flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
                href={link.href}
                class:active={link.exactMatch
                  ? pathname === link.href
                  : pathname.startsWith(link.href)}
                on:click={closeSidebar}
              >
                {#if link.icon}
                  <span class="material-symbols-outlined">{link.icon}</span>
                {/if}
                {link.label}
              </a>
            {/if}
          </div>
        {/each}
      </nav>
    {/if}

    <footer class="sticky bottom-0 border-t border-t-black/10">
      <button
        class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
        on:click={() => (dropdown = true)}
      >
        <span class="material-symbols-outlined">account_circle</span>
        <span class="flex-1 text-left">Account</span>
        <span class="material-symbols-outlined">chevron_right</span>
      </button>

      {#if dropdown}
        <div
          class="absolute bottom-full right-4 bg-white shadow flex flex-col whitespace-nowrap divide-y"
          use:clickOutside
          on:click_outside={() => (dropdown = false)}
          transition:slide
        >
          <a
            class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
            href="/dashboard/account"
            on:click={() => {
              dropdown = false;
            }}>Account</a
          >
          <button
            class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
            on:click={signOut}>Sign out</button
          >
        </div>
      {/if}
    </footer>
  </aside>
{/if}

<style lang="postcss">
  @media (max-width: 767px) {
    aside {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .sidebar-link.active,
  .sidebar-dropdown.active {
    background-color: var(--tertiary-color);
    color: var(--tertiary-contrast-color);
  }

  .dropdown-link.active {
    @apply underline translate-x-2 transition-all;
  }
</style>
