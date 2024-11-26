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

<header>
  <div>
    <a href="/">
      <img class="logo" src="/brand/logo.svg" alt="genos logo">
    </a>
  </div>

  <span class:active={open}>GENOS</span>

  <div>
    <button class="mobile-menu-trigger" type="button" on:click={() => (open = !open)}>
      <svg class="bg-svg" width="56" height="62" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 1.3094C26.4752 -0.119662 29.5248 -0.119661 32 1.3094L51.7128 12.6906C54.188 14.1197 55.7128 16.7607 55.7128 19.6188V42.3812C55.7128 45.2393 54.188 47.8803 51.7128 49.3094L32 60.6906C29.5248 62.1197 26.4752 62.1197 24 60.6906L4.28719 49.3094C1.81198 47.8803 0.287188 45.2393 0.287188 42.3812V19.6188C0.287188 16.7607 1.81198 14.1197 4.28719 12.6906L24 1.3094Z" fill={open ? '#ffffff' : '#032130'}/>
      </svg>
      {#if open}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.92871 16.071L16.0708 1.92891" stroke="#032130" stroke-width="3"/>
          <path d="M1.92871 1.92944L16.0708 16.0716" stroke="#032130" stroke-width="3"/>
        </svg>
      {:else}
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H20" stroke="white" stroke-width="3"/>
          <path d="M0 12H20" stroke="white" stroke-width="3"/>
        </svg>
      {/if}
    </button>
  </div>
</header>

<div class="mobile-menu" class:active={open}>
  <div class="mobile-menu-side" style="border-right-width: 1px">
    <div class="mobile-menu-side-text" style="transform: rotate(-180deg)">© 2022 — Genos Glyco</div>
  </div>
  <nav>
    <div class="links-menu">
      <ul class="links-social">
        <li>
          <a href="mailto:info@genos-glyco.com" style="text-decoration: underline">info@genos-glyco.com</a>
        </li>
        <li>
          <a href="tel:+38516471181">+385 1 647 1181</a>
          <br>
          <a href="tel:+38516471182">+385 1 647 1182</a>
        </li>
        <li>
          <a href="https://maps.app.goo.gl/1bfL66FpdEin1hL16" target="_blank" rel="noreferrer noopener">
            Borongajska cesta 83h
            <br>
            10000 Zagreb
            <br>
            Croatia
          </a>
        </li>
      </ul>
      <ul class="links-web">
        {#each items as link}
          <li><a href={link.url}>{link.label}</a></li>
        {/each}
      </ul>
    </div>

    <a class="link-to-contact" href="/contact">Submit free request</a>
  </nav>
  <div class="mobile-menu-side" style="border-left-width: 1px">
    <div class="mobile-menu-side-text">
      <a href="https://x.com/gglycoscience?lang=hr" target="_blank" rel="noreferrer noopener">Twitter</a>
      —
      <a href="https://www.linkedin.com/company/genos-ltd/posts/?feedView=all" target="_blank" rel="noreferrer noopener">LinkedIn</a>
    </div>
  </div>
</div>
