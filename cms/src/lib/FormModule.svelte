<svelte:options accessors />

<script lang="ts">
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/input.css';
  import '@jaspero/web-components/dist/select.wc';
  import '@jaspero/web-components/dist/select.css';
  import '@jaspero/web-components/dist/multiselect.wc';
  import '@jaspero/web-components/dist/multiselect.css';
  import '@jaspero/web-components/dist/multisearch.wc';
  import '@jaspero/web-components/dist/multisearch.css';
  import '@jaspero/web-components/dist/datepicker.wc';
  import '@jaspero/web-components/dist/datepicker.css';
  import '@jaspero/web-components/dist/ckeditor.wc';
  import '@jaspero/web-components/dist/ckeditor.css';
  import '@jaspero/web-components/dist/textarea.wc';
  import '@jaspero/web-components/dist/textarea.css';
  import '@jaspero/web-components/dist/checkbox.wc';
  import '@jaspero/web-components/dist/checkbox.css';
  import '@jaspero/web-components/dist/radio.wc';
  import '@jaspero/web-components/dist/radio.css';
  import '@jaspero/web-components/dist/file-upload.wc';
  import '@jaspero/web-components/dist/file-upload.css';
  import '@jaspero/web-components/dist/file-list.wc';
  import '@jaspero/web-components/dist/toggle.wc';
  import '@jaspero/web-components/dist/toggle.css';
  import '@jaspero/web-components/dist/chips.wc';
  import '@jaspero/web-components/dist/chips.css';
  import '@jaspero/web-components/dist/review-stars.wc';
  import '@jaspero/web-components/dist/code-editor.wc';

  import { ModularSchema, ModularView } from '@jaspero/modular';
  import { onMount } from 'svelte';

  // Needs to be imported so the components register
  import './form-elements/form-elements.ts';

  export let items: any[] | null = [];
  export let views: any[] | null = null;
  export let initialValue: any | null = null;
  export let value: any = {};
  export let render: any = null;
  export let id = '';
  export let container: string | null = null;
  export let onValueChange: ((value: any, elements: any) => void) | null = null;

  let containerElement: HTMLDivElement;

  onMount(() => {
    const schema = new ModularSchema({});

    if (initialValue) {
      for (const key in initialValue) {
        value[key] = initialValue[key];
      }
    }

    const instance = schema.createInstance(value);

    const view = new ModularView({
      componentPrefix: '',
      schema,
      views: views
        ? views
        : [
            {
              ...(container && { container }),
              ...(id && { id }),
              items
            }
          ]
    });

    render = view.render({
      parentElement: containerElement,
      instance
    });

    render.addEventListener('change', (change: any, elements: any) => {
      if (onValueChange) {
        onValueChange(change, elements);
      }

      value = change;
    });
  });
</script>

<div bind:this={containerElement}></div>
