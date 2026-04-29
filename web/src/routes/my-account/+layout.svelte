<script lang="ts">
  import { signOut } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/utils/firebase';
  import { page } from '$app/stores';
  import { meta } from '$lib/meta/meta.store';
  import { onMount } from 'svelte';
  import { redirectUnauthorized } from '$lib/guards/redirect-unauthoirzed';

  export let data: {
    header: string;
    footer: string;
  } = { header: '', footer: '' };

  let loading = true;

  $: pathname = $page.url.pathname;

  const links = [
    {
      label: 'Plasmid Orders',
      url: '/my-account/plasmid-orders'
    },
    {
      label: 'Settings',
      url: '/my-account/settings'
    }
  ];

  const toolLinks = [
    {
      label: 'Plasmid Builder',
      url: '/tools/plasmid-builder'
    }
  ];

  async function logOut() {
    await signOut(auth);

    goto('/');
  }

  onMount(async () => {
    const forward = window.location.pathname + window.location.search + window.location.hash;
    const user = await redirectUnauthorized(
      '/sign-in?forward=' + encodeURIComponent(forward)
    );

    if (user) {
      loading = false;
    }
  });
</script>

{#if !loading}
  {#if data.header}
    {@html data.header}
  {/if}

  <section class="mx-auto max-w-[1180px] px-4 pt-36 pb-16 mlg:pt-32">
    <div class="[display:grid] grid-cols-[260px_minmax(0,1fr)] gap-6 mlg:grid-cols-1">
      <aside class="h-fit rounded-xl border border-slate-200 bg-white p-3 shadow-sm mlg:sticky mlg:top-24">
        <div class="px-3 py-2 text-xs font-black uppercase tracking-[.14em] text-slate-400">My Account</div>
        <nav class="mt-1 flex flex-col gap-1">
          {#each links as link}
            <a
              class="rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
              class:bg-[#0A415C]={pathname === link.url}
              class:text-white={pathname === link.url}
              class:text-slate-700={pathname !== link.url}
              class:hover:bg-slate-100={pathname !== link.url}
              href={link.url}
            >
              {link.label}
            </a>
          {/each}
          <div class="mt-4 px-3 py-2 text-xs font-black uppercase tracking-[.14em] text-slate-400">Tools</div>
          {#each toolLinks as link}
            <a
              class="rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
              class:bg-[#0A415C]={pathname === link.url}
              class:text-white={pathname === link.url}
              class:text-slate-700={pathname !== link.url}
              class:hover:bg-slate-100={pathname !== link.url}
              href={link.url}
            >
              {link.label}
            </a>
          {/each}
          <button
            type="button"
            class="mt-3 rounded-lg border border-slate-200 px-3 py-2 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            on:click={logOut}
          >
            Sign Out
          </button>
        </nav>
      </aside>

      <div class="min-w-0">
        <div class="mb-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <h2 class="text-2xl font-black text-[#032130]">{$meta.title}</h2>
          <div class="mt-1 text-sm text-slate-500">
            <a class="underline hover:text-slate-700" href="/">Home</a>
            <span class="mx-1">/</span>
            <span>{$meta.title}</span>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </section>

  {#if data.footer}
    {@html data.footer}
  {/if}
{:else}
  <div class="pt-36 min-h-[60vh] flex items-center justify-center text-[#032130]">
    <p>Loading...</p>
  </div>
{/if}
