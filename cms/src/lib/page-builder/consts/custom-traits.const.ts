import { SearchService } from '../../services/search.service';
import { GOOGLE_MAPS_API_KEY } from '$lib/consts/google-maps-api-key.conts';

export const CUSTOM_TRAITS: any[] = [
  {
    id: 'asset-select',
    eventCapture: ['input'],
    createInput({ trait }: any) {
      const el = document.createElement('asset-select') as any;

      el.name = trait.get('name');
      el.path = trait.get('path') || 'pages';
      el.types = trait.get('types') || ['image'];
      el.selectable = trait.get('selectable') || 'single';

      return el;
    },
    onUpdate({ elInput, component }) {
      if (component?.attributes?.attributes?.src) {
        elInput.value = component?.attributes?.attributes?.src;
      }
    },
    onEvent({ elInput, component }) {
      component.addAttributes({src: elInput.value});
    }
  },
  {
    id: 'directives-select',
    noLabel: true,
    templateInput: '',
    eventCapture: ['input'],
    createInput({ trait }: any) {
      const el = document.createElement('directives-select') as any;

      el.name = trait.get('name');
      el.value = trait?.target?.attributes?.attributes?.directives || {};

      return el;
    },
    onUpdate({ elInput, component }) {
      if (component?.attributes?.attributes?.directives) {
        elInput.value = component?.attributes?.attributes?.directives;
      }
    },
    onEvent({ elInput, component }) {
      const toAdd: { [key: string]: string } = {
        [elInput.name]: elInput.value
      };

      for (const key in elInput.value) {
        if (key === 'directives') {
          continue;
        }

        toAdd[`data-${key}`] = elInput.value[key];
      }

      component.addAttributes(toAdd);
    }
  },
  {
    id: 'document-lookup',
    noLabel: true,
    templateInput: '',
    createInput({ trait }: any) {
      const el = document.createElement('jp-multisearch') as any;

      el.label = trait.get('label');
      el.singleSelect = trait.get('singleSelect') ?? true;
      el.name = trait.get('name');
      el.service = new SearchService(
        trait.get('collection'),
        trait.get('searchKey') || 'name',
        trait.get('displayKey') || 'name',
        trait.get('valueKey') || 'id'
      );

      return el;
    },
    onEvent({ elInput, component }) {
      setTimeout(() => component.addAttributes({ [elInput.name]: elInput.getValue() }), 500);
    }
  },
  {
    id: 'select-options',
    events: {
      keyup: 'onChange'
    },
    onValueChange: function () {
      const optionsStr = this.model.get('value').trim();
      const options = optionsStr.split('\n');
      const optComps = [];

      for (var i = 0; i < options.length; i++) {
        const optionStr = options[i];
        const option = optionStr.split('::');
        const opt: any = {
          tagName: 'option',
          attributes: {}
        };
        if (option[1]) {
          opt.content = option[1];
          opt.attributes.value = option[0];
        } else {
          opt.content = option[0];
          opt.attributes.value = option[0];
        }
        optComps.push(opt);
      }

      const comps = this.target.get('components');
      comps.reset(optComps);
      this.target.view.render();
    },

    getInputEl: function () {
      if (!this.$input) {
        const md = this.model;
        const trg = this.target;
        const options = trg.get('components');

        let optionsStr = '';

        for (var i = 0; i < options.length; i++) {
          const option = options.models[i];
          const optAttr = option.get('attributes');
          const optValue = optAttr.value || '';
          optionsStr += `${optValue}::${option.get('content')}\n`;
        }

        this.$input = document.createElement('textarea');
        this.$input.value = optionsStr;
      }
      return this.$input;
    }
  },
  {
    id: 'address-lookup',
    events: {
      keyup: 'onInputChange',
    },
    createInput({ trait, component }) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Enter address';

      const debounce = (func, delay) => {
        let debounceTimer;
        return function (...args) {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
      };

      const searchAddress = async (event) => {
        const value = event.target.value;

        if (value) {
          try {
            const res = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(value)}&key=${GOOGLE_MAPS_API_KEY}`
            );
            const data = await res.json();

            if (data.results && data.results[0]) {
              const { lat, lng } = data.results[0].geometry.location;

              const latTrait = component.getTrait('lat');
              const lngTrait = component.getTrait('lng');

              latTrait.set('value', lat);
              lngTrait.set('value', lng);
            }
          } catch (error) {
          }
        }
      };

      input.addEventListener('keyup', debounce(searchAddress, 1000));

      return input;
    }
  }
];
