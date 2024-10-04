import type { Editor } from 'grapesjs';

export function getHtml(grapesInstance: Editor) {
	return grapesInstance.getHtml()
		.replace('<body>', '')
		.replace('</body>', '')
		.replaceAll(/directives\=\"\[object Object\]\"/g, '')
		.replaceAll(/dataset\=\"\[object Object\]\"/g, '')
		.replaceAll(/data\-metadata\=\"\<\!\-\-\(figmeta\).*\"/g, '')
		.replaceAll(/data\-buffer\=\"\<\!\-\-\(figmeta\).*\"/g, '')
}