import type { Editor } from 'grapesjs';

export function getCss(grapesInstance: Editor) {
  const cleanded = (grapesInstance.getCss() || '')
    .replaceAll(/(?<=(\* \{)).*?(?=\})/g, '')
    .replaceAll(/(?<=(body \{)).*?(?=\})/g, '')
    .replace('* {}', '')
    .replace('body {}', '');

  return cleanded;
}
