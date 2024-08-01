import '@jaspero/web-components/dist/asset-manager.wc';
import grapesjs from 'grapesjs';
import parserPostCSS from 'grapesjs-parser-postcss';
import styleGradientPlugin from 'grapesjs-style-gradient';
import componentCodeEditor from './plugins/component-code-editor/component-code-editor';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css';
import './plugins/component-code-editor/component-code-editor.css';
import { AMService } from './am.service';
import { DEVICES } from './consts/devices.const';
import { GLOBAL_STYLES } from './consts/global-styles.const';
import { STYLE_OVERRIDES } from './consts/style-overrides.const';
import { TYPES } from './consts/types.const';
import type { PageBuilderForm } from './types/page-builder-form.interface';
import type { Popup } from './types/popup.interface';

/**
 * Registers all custom components
 */
import './custom-components/custom-component';

export function renderGrapes(
  pageBuilderEl: HTMLDivElement,
  grapesInstance: any,
  json?: any,
  popups?: Popup[],
  forms?: PageBuilderForm[]
) {
  if (grapesInstance) {
    if (json) {
      grapesInstance.loadProjectData(json);
    } else {
      grapesInstance.runCommand('core:canvas-clear');
    }

    return;
  }

  let assetManagerRendered = false;
  let assetManagerListener: any;

  grapesInstance = grapesjs.init({
    canvas: {
      styles: [
        'https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap',
        '/css/shared.css'
      ]
    },
    container: pageBuilderEl,
    panels: { defaults: [] },
    plugins: [
      styleGradientPlugin,
      parserPostCSS,
      (editor) =>
        componentCodeEditor(editor, {
          preserveWidth: true,
          appendTo: '#component-wrapper'
        })
    ],
    pluginsOpts: {
      'grapesjs-style-gradient': {}
    },
    height: '100%',
    storageManager: false,
    selectorManager: {
      componentFirst: true,
      custom: true
    },
    deviceManager: {
      default: DEVICES[0].id,
      devices: DEVICES as any
    },
    assetManager: {
      custom: true
    }
  });

  TYPES(forms!).forEach(({ id, ...data }) => grapesInstance.DomComponents.addType(id, data));

  grapesInstance.TraitManager.addType('select-options', {
    events: {
      'keyup': 'onChange',
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
        if(option[1]) {
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

    getInputEl: function() {
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
    },
  });

  if (popups) {
    grapesInstance.DomComponents.addType(`pb-popup`, {
      isComponent: (el: HTMLElement) => el.tagName === 'PB-POPUP',
      model: {
        defaults: {
          tagName: 'pb-popup',
          droppable: false,
          attributes: {
            label: 'Open'
          },
          traits: [
            {
              type: 'text',
              label: 'Label',
              name: 'label'
            },
            {
              type: 'select',
              name: 'popup',
              label: 'Popup',
              options: popups!.map((popup) => ({
                id: popup.id,
                label: popup.title
              }))
            }
          ]
        }
      }
    });
  }

  let assetManager: any;

  grapesInstance.on(
    'asset:custom',
    (props: {
      open: boolean;
      container: HTMLDivElement;
      types: string[];
      select: (asset: string, final: boolean) => void;
    }) => {
      if (assetManager) {
        assetManager.shownFiles = props.types;
      }

      if (props.open) {
        if (assetManagerRendered) {
          assetManager.clearSelection();
        } else {
          assetManagerRendered = true;

          assetManager = document.createElement('jp-asset-manager') as any;
          assetManager.service = new AMService();
          assetManager.rootPath = 'pages';
          assetManager.shownFiles = props.types;

          assetManager.selectable = 'single';

          props.container.appendChild(assetManager);
        }

        if (assetManagerListener) {
          assetManager.removeEventListener('selected', assetManagerListener);
        }

        assetManagerListener = function (event: { detail: { url: string } }) {
          props.select(event.detail.url, true);
        };

        assetManager.addEventListener('selected', assetManagerListener);
      }
    }
  );

  grapesInstance.on('load', function () {
    const styleManager = grapesInstance.StyleManager;

    STYLE_OVERRIDES.forEach(({ id, property, ...overides }) => {
      styleManager.removeProperty(id, property);

      styleManager.addProperty(id, {
        property,
        ...overides
      });
    });

    styleManager.render();
  });

  grapesInstance.StyleManager.addProperty('decorations', {
    extend: 'background-image',
    name: 'Gradient Background'
  });

  grapesInstance.StyleManager.addProperty('typography', {
    extend: 'max-width',
    name: 'Max Width',
    units: ['px', '%', 'ch']
  });

  grapesInstance.StyleManager.addProperty('extra', {
    type: 'number',
    label: 'z-index',
    property: 'z-index',
    default: '0'
  });

  grapesInstance.StyleManager.addProperty('extra', {
    type: 'select',
    label: 'Overflow',
    property: 'overflow',
    default: 'auto',
    options: [
      { id: 'visible', label: 'Visible' },
      { id: 'hidden', label: 'Hidden' },
      { id: 'auto', label: 'Auto' }
    ]
  });

  grapesInstance.runCommand('core:component-outline');
  grapesInstance.DomComponents.getWrapper()!.set({ badgable: false, selectable: false });

  grapesInstance.on('component:update:traits', (component: any) => {
    for (const key in component.changed) {
      switch (key) {
        case 'tagName': {
          component.setClass([component.changed.tagName]);
          break;
        }
        case 'column-span-desktop': {
          let cls = component.getAttributes().class;
          let regex = /gc-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(/gc-\d{0,2}/, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
        case 'column-span-tablet': {
          let cls = component.getAttributes().class;
          let regex = /gc-sm-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(regex, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
        case 'column-span-mobile': {
          let cls = component.getAttributes().class;
          let regex = /gc-xs-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(regex, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
        case 'column-start-desktop': {
          let cls = component.getAttributes().class;
          let regex = /gcs-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(regex, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
        case 'column-start-tablet': {
          let cls = component.getAttributes().class;
          let regex = /gcs-sm-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(regex, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
        case 'column-start-mobile': {
          let cls = component.getAttributes().class;
          let regex = /gcs-xs-\d{0,2}/;

          if (regex.test(cls)) {
            cls = cls.replace(regex, component.changed[key]);
          } else {
            cls += ' ' + component.changed[key];
          }

          component.setClass(cls);
          break;
        }
      }
    }
  });

  if (json) {
    grapesInstance.loadProjectData(json);
  }

  return grapesInstance;
}
