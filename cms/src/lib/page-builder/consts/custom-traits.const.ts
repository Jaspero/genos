import { SearchService } from '../../services/search.service';

export const CUSTOM_TRAITS: any[] = [
  {
    id: 'document-lookup',
    noLabel: true,
    templateInput: '',
    createInput({ trait }: any) {
      const el = document.createElement('jp-multisearch') as any;

      el.label = trait.get('label');
      el.singleSelect = true;
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
      component.addAttribute({ [elInput.name]: elInput.value });
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
  }
];
