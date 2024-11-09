import '@jaspero/web-components/dist/asset-manager.wc';
import '@jaspero/web-components/dist/asset-manager.css';
import 'grapesjs/dist/css/grapes.min.css';
import { DEVICES } from '$lib/page-builder/consts/devices.const';
import grapesjs, {Editor} from 'grapesjs';
import parserPostCSS from 'grapesjs-parser-postcss';
import styleGradientPlugin from 'grapesjs-style-gradient';
import { AMService } from '$lib/page-builder/am.service';
import componentCodeEditor from '$lib/page-builder/plugins/component-code-editor/component-code-editor';
import presetNewsletter from 'grapesjs-preset-newsletter';

export function renderMjMl(pageBuilderEl: HTMLDivElement, grapesInstance: Editor, json?: any) {
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
  let assetManager: any;

  grapesInstance = grapesjs.init({
    telemetry: false,
    container: pageBuilderEl,
    panels: { defaults: [] },
    plugins: [
      presetNewsletter,
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
    },
    blockManager: {
      blocks: [
        {
          id: 'ordered-list',
          label: 'Ordered List',
          media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style="width: 100%; height: 48px"><path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/></svg>`,
          select: true,
          content: `<ol style="padding-left:2rem"><li>List Item</li><li>List Item</li><li>List Item</li></ol>`
        },
        {
          id: 'unordered-list',
          label: 'Unordered List',
          media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style="width: 100%; height: 48px"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>`,
          select: true,
          content: `<ul style="padding-left:2rem"><li>List Item</li><li>List Item</li><li>List Item</li></ul>`
        },
        {
          id: 'conditioned-block',
          label: 'Conditional',
          media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style="width: 100%; height: 48px"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`,
          select: true,
          content: `<div data-condition="something">{{#if something}}<div></div>{{/if}}</div>`
        }
      ]
    }
  });

  grapesInstance.DomComponents.addType('condition', {
    extend: 'div',
    isComponent: (el: HTMLDivElement) => el.dataset?.hasOwnProperty('condition'),
    attributes: {
      'data-condition': 'something'
    },
    view: {
      init(init: any) {
        // @ts-ignore
        this.listenTo(init.model, 'change:attributes', this.handleAttrChange);
      },
      handleAttrChange(component: any) {
        const condition = component.getAttributes()['data-condition'];
        component.getChildAt(0).replaceWith(`{{#if ${condition}}}`);
      }
    },
    model: {
      defaults: {
        traits: [
          {
            label: 'Condition',
            name: 'data-condition'
          }
        ]
      }
    }
  });

  /**
   * Extend the image type to allow for directly editing the source
   */
  grapesInstance.DomComponents.addType('image', {
    extends: 'image',
    model: {
      defaults: {
        traits: [
          {
            label: 'Source',
            name: 'src'
          },
          {
            label: 'Alt',
            name: 'alt'
          }
        ]
      }
    }
  });

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

  grapesInstance.runCommand('core:component-outline');
  grapesInstance.DomComponents.getWrapper()!.set({ badgable: false, selectable: false });

  grapesInstance.on('component:create', (component) => {

    /**
     * Rename the default naming convention in the layer manager
     */
    component.getName = () => component.attributes['custom-name'] || `${component.attributes.tagName}#${component.ccid}`;
  });

  if (json) {
    grapesInstance.loadProjectData(json);
  }

  return grapesInstance;
}
