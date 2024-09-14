<svelte:options customElement={{ tag: 'pb-mobile-menu', shadow: 'none' }} />

<script lang="ts">

  export let links: string;
  export let labels: string;

  $: items = links && labels ? constructLinks() : [];

  let open = false;

  function constructLinks() {
    const allLinks = links.split(',');
    const allLabels = labels.split(',');

    return allLinks.map((link, index) => ({ label: allLabels[index], url: link }));
  }
</script>

<button class="mobile-menu-trigger" type="button" on:click={() => (open = !open)}
  ><svg width="34" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M1.69 20.285h30.428a1.69 1.69 0 1 1 0 3.381H1.69a1.69 1.69 0 0 1 0-3.38Zm30.428-6.762H1.69a1.69 1.69 0 0 1 0-3.38h30.428a1.69 1.69 0 0 1 0 3.38Zm0-10.142H1.69A1.69 1.69 0 0 1 1.69 0h30.428a1.69 1.69 0 0 1 0 3.38Z"
      fill="#2E3192"
    /></svg
  ></button
>

<ul class="mobile-menu" class:active={open}>
  {#each items as link}
    <li><a href={link.url}>{link.label}</a></li>
  {/each}
</ul>
