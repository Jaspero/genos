<script lang="ts">
  import { onMount } from 'svelte';
  import FormModule from '$lib/FormModule.svelte';

  export let activeSidebar = 'email-settings';
  export let items: Array<any> | undefined; 
  export let value: any;
  export let grapesInstance: any;
  export let formModule: FormModule;

  let sidebarElements: Array<{
    id: string;
    title: string;
    icon: string;
  }> = [];
  let blocksEl: HTMLDivElement;
  let componentEl: HTMLDivElement;
  let activeComponent = '';
  let codeEditorInstance: any;
  let listenersConnected = false;
  let selectorEl: any;

  const componentTabs = [
    {
      id: 'styles',
      title: 'Styles',
      icon: 'style'
    },
    {
      id: 'traits',
      title: 'Traits',
      icon: 'dataset'
    },
    {
      id: 'layers',
      title: 'Layers',
      icon: 'stacks'
    },
    {
      id: 'code',
      label: 'Code',
      icon: 'code'
    }
  ];

  $: if (activeComponent && componentEl) {
    componentEl.innerHTML = '';

    if (activeComponent !== 'code' && codeEditorInstance) {
      codeEditorInstance.hideCodePanel();
    }

    switch (activeComponent) {
      case 'layers': {
        const el = grapesInstance.LayerManager.render();
        componentEl.appendChild(el);
        break;
      }
      case 'styles': {
        componentEl.appendChild(selectorEl);

        const el = grapesInstance.StyleManager.render();

        componentEl.appendChild(el);
        break;
      }
      case 'traits': {
        const el = grapesInstance.TraitManager.render();
        componentEl.appendChild(el);
        break;
      }
      case 'code': {
        if (codeEditorInstance) {
          codeEditorInstance.showCodePanel();
          codeEditorInstance.buildCodePanel();
        } else {
          grapesInstance.runCommand('open-code');
          codeEditorInstance = grapesInstance.runCommand('code-editor-object');
        }
        break;
      }
    }
  }

  $: if (activeSidebar) {
    switch (activeSidebar) {
      case 'blocks': {
        if (blocksEl) {
          const el = grapesInstance.BlockManager.render();
          blocksEl.appendChild(el);
        }
        break;
      }
      case 'component': {
        if (!activeComponent) {
          activeComponent = 'styles';
        }
        break;
      }
    }
  }

  $: if (grapesInstance) {
    connectListeners();
  }

  function connectListeners() {
    if (listenersConnected) {
      return;
    }

    grapesInstance.on('component:selected', (c: any) => {
      activeSidebar = 'component';
    });

    selectorEl = grapesInstance.SelectorManager.render();

    listenersConnected = true;
  }

  onMount(() => {
    sidebarElements = [
      {
        id: 'email-settings',
        title: 'Email Settings',
        icon: 'settings'
      },
      {
        id: 'blocks',
        title: 'Blocks',
        icon: 'add_box'
      },
      {
        id: 'component',
        title: 'Component',
        icon: 'view_in_ar'
      }
    ];
  });
</script>

<aside>
  {#each sidebarElements as element}
    <button
      title={element.title}
      class="material-symbols-outlined"
      class:active={activeSidebar === element.id}
      on:click={() => (activeSidebar = activeSidebar === element.id ? '' : element.id)}
      >{element.icon}</button
    >
  {/each}
</aside>

<section class:active={activeSidebar}>
  {#if activeSidebar === 'email-settings'}
    <p class="p-4 border-b">Page settings</p>
    <FormModule id="page-settings" bind:this={formModule} {items} bind:value />
  {:else if activeSidebar === 'blocks'}
    <p class="p-4 border-b">Blocks</p>
    <div bind:this={blocksEl} />
  {:else if activeSidebar === 'component'}
    <div class="flex justify-around border-b">
      {#each componentTabs as element}
        <button
          title={element.title}
          class="material-symbols-outlined w-full"
          class:active={activeComponent === element.id}
          on:click={() => (activeComponent = element.id)}
        >
          {element.icon}
        </button>
      {/each}
    </div>
    <div id="component-wrapper" bind:this={componentEl} />
  {/if}
</section>

<style lang="postcss">
  aside {
    @apply bg-white border-r;
    height: 100%;
    width: 55px;
    display: flex;
    flex-direction: column;
  }

  section.active {
    width: 300px;
  }

  section {
    @apply bg-white border-r duration-200;
    width: 0;
    height: 100%;
    overflow-y: auto;
  }

  .material-symbols-outlined {
    padding: 0.5rem 0.2rem;
  }

  .material-symbols-outlined.active {
    @apply bg-primary/[8%] text-secondary;
  }

  #component-wrapper {
    height: calc(100% - 41px);
    overflow-y: auto;
  }
</style>
