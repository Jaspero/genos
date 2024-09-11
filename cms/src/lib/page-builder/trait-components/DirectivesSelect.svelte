<svelte:options customElement={{ tag: 'directives-select', shadow: 'none' }} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let value: { [key: string]: any };
  export let name: string;

  let parentEl: HTMLDivElement;

  const dispatch = createEventDispatcher();

  const optionsMap: { [key: string]: any } = {
    'scroll-tracker': {
      label: 'Scroll Tracker',
      options: [
        {
          label: 'Height',
          value: 'height',
          type: 'jp-input',
          options: { type: 'number' },
          default: 100
        },
        { label: 'Class', value: 'class', type: 'jp-input', default: 'scrolled' }
      ]
    },
    'scroll-to': {
      label: 'Scroll To',
      options: [
        {
          label: 'Target Selector',
          value: 'selector',
          type: 'jp-input'
        },
        {
          label: 'Behavior',
          value: 'behavior',
          type: 'jp-select',
          default: 'smooth',
          options: {
            options: [
              { label: 'Smooth', value: 'smooth' },
              { label: 'Instant', value: 'instant' },
              { label: 'Auto', value: 'auto' },
            ]
          }
        }
      ]
    },
    'toggle-class': {
      label: 'Toggle Class',
      options: [
        {
          label: 'Class',
          value: 'class',
          type: 'jp-input',
          default: 'active'
        }
      ]
    }
  };

  onMount(() => {
    const el = document.createElement('jp-multiselect') as any;
    const innerEl = document.createElement('div');

    el.label = 'Directives Select';
    el.name = 'directives-select';
    el.options = Object.entries(optionsMap).map(([key, value]) => ({
      value: key,
      label: value.label
    }));
		
		if (value.directives?.length) {
			el.value = value.directives;
		}

		function render(directives: string[]) {
      for (const item of directives) {
        const it = optionsMap[item];

        for (const option of it.options) {
          const itemEl = document.createElement(option.type);

          itemEl.name = option.value;
          itemEl.label = it.label + ' - ' + option.label;

          itemEl.classList.add('mt-2', 'block');

          if (option.default && !value.hasOwnProperty(`${item}-${option.value}`)) {
            itemEl.value = option.default;
            value[`${item}-${option.value}`] = option.default;
            dispatch('input', value);
          } else if (value.hasOwnProperty(`${item}-${option.value}`)) {
            itemEl.value = value[`${item}-${option.value}`];
          }

          if (option.options) {
            for (const key in option.options) {
              itemEl[key] = option.options[key];
            }
          }

          itemEl.addEventListener('value', (i: { detail: any }) => {
            value[item + '-' + option.value] = i.detail.value;
            dispatch('input', value);
          });

          innerEl.appendChild(itemEl);
        }
      }
		}

    el.addEventListener('value', (e: { detail: string[] }) => {
      innerEl.innerHTML = '';

      value = {
        directives: e.detail
      };

      render(value.directives);

      dispatch('input', value);
    });

    if (value.directives?.length) {
      render(value.directives);
    }

    parentEl.appendChild(el);
    parentEl.appendChild(innerEl);
  });

  onDestroy(() => {
    parentEl.innerHTML = '';
  });
</script>

<div bind:this={parentEl}></div>
