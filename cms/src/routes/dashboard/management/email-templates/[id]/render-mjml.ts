import '@jaspero/web-components/dist/asset-manager.wc';
import 'grapesjs/dist/css/grapes.min.css';
import {DEVICES} from '$lib/page-builder/consts/devices.const';
import grapesjs from 'grapesjs';
import parserPostCSS from 'grapesjs-parser-postcss';
import styleGradientPlugin from 'grapesjs-style-gradient';
import {AMService} from '$lib/page-builder/am.service';
import componentCodeEditor from '$lib/page-builder/plugins/component-code-editor/component-code-editor';
import presetNewsletter from 'grapesjs-preset-newsletter';

export function renderMjMl(
	pageBuilderEl: HTMLDivElement,
	grapesInstance: any,
	json?: any,
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
	let assetManager: any;

	grapesInstance = grapesjs.init({
		container: pageBuilderEl,
		panels: {defaults: []},
		plugins: [
			presetNewsletter,
			styleGradientPlugin,
			parserPostCSS,
			editor => componentCodeEditor(
				editor,
				{
					preserveWidth: true,
					appendTo: '#component-wrapper'
				}
			)
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

				assetManagerListener = function (event: {detail: {url: string}}) {
					props.select(event.detail.url, true);
				};

				assetManager.addEventListener('selected', assetManagerListener);
			}
		}
	);

	grapesInstance.runCommand('core:component-outline');
  grapesInstance.DomComponents.getWrapper()!.set({badgable: false, selectable: false});

	if (json) {
    grapesInstance.loadProjectData(json);
  }

  return grapesInstance;
}