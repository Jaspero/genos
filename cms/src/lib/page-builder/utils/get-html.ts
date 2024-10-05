import type {Editor} from 'grapesjs';
import {minify} from 'html-minifier-terser';

export async function getHtml(grapesInstance: Editor) {
	const cleaned = grapesInstance.getHtml()
		.replace('<body>', '')
		.replace('</body>', '')
		.replaceAll(/directives\=\"\[object Object\]\"/g, '')
		.replaceAll(/dataset\=\"\[object Object\]\"/g, '')
		.replaceAll(/data\-metadata\=\"\<\!\-\-\(figmeta\)[^"]*\"/g, '')
		.replaceAll(/data\-buffer\=\"\<\!\-\-\(figmeta\)[^"]*\"/g, '');

	const minified = await minify(cleaned, {
		caseSensitive: true,
		collapseBooleanAttributes: true,
		collapseInlineTagWhitespace: true,
		collapseWhitespace: true,
		removeComments: true,
		removeAttributeQuotes: true,
		removeRedundantAttributes: true,
		removeOptionalTags: true
	});

	return minified;
}