import type { Editor } from 'grapesjs';

export function getCss(grapesInstance: Editor) {
  return (grapesInstance.getCss() || '')
    .replaceAll(/\* {((.|\n)*)}/g, '')
    .replaceAll(/body {((.|\n)*)}/g, '');
}
