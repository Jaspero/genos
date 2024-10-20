<script lang="ts">
  import { signOut } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { auth, user } from '$lib/utils/firebase';
  import { page } from '$app/stores';
  import { meta } from '$lib/meta/meta.store';

  $: pathname = $page.url.pathname;

  const links = [
    {
      label: 'Orders',
      url: '/my-account'
    },
    {
      label: 'Favorites',
      url: '/my-account/favorites'
    },
    {
      label: 'Coupons',
      url: '/my-account/coupons'
    },
    {
      label: 'Settings',
      url: '/my-account/settings'
    }
  ];

  $: firstLetter = ($user!.name || 'A').charAt(0).toUpperCase();

  async function logOut() {
    await signOut(auth);

    goto('/');
  }
</script>

<div class="flex flex-wrap p-20">
  <div class="flex justify-start w-full gap-4">
    <aside class="w-[300px] flex flex-col gap-4">
      <div class="shadow rounded p-4 flex gap-2 items-center">
        <div class="w-10 h-10 rounded-full bg-slate-500 text-white text-center leading-10">
          {firstLetter}
        </div>
        <div>
          <div>{$user!.name}</div>
          <div class="text-gray-400">{$user!.email}</div>
        </div>
      </div>

      <nav class="shadow p-4 rounded flex flex-col text-lg">
        {#each links as link}
          <a class="p-2 transition hover:bg-slate-400 hover:text-white" class:active={pathname === link.url} href={link.url}>
            {link.label}
          </a>
        {/each}
        <div class="mt-20">
          <button type="button" class=" p-2 hover:bg-slate-400 hover:text-white w-full text-left" on:click={logOut}>Sign Out</button>
        </div>
      </nav>
    </aside>
    <div class="flex-1">
      <div class="mb-4 h-[80px] flex flex-col justify-center">
        <h2 class="text-2xl font-bold">{$meta.title}</h2>
        <div class="text-sm">
          <a class="text-gray-400 underline hover:text-black" href="/">Home</a>
          <span class="text-gray-400">/</span>
          <a class="text-gray-400 underline hover:text-black" href="/my-account">My Account</a>
          <span class="text-gray-400">/</span>
          <span>{$meta.title}</span>
        </div>
      </div>
      <slot />
    </div>
  </div>
</div>

<style>
  .active {
    @apply bg-slate-500 text-white;
  }

  aside {
    height: fit-content;
  }
</style>
