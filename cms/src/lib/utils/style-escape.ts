/**
 * This is a svelte issue. The "style" element needs to be
 * obfuscated so that the complier doesn't crash.
 *
 * https://github.com/sveltejs/vite-plugin-svelte/issues/315
 */
export function styleEscape(style: string) {
  return `${'<sty' + 'le>'}${style}${'</sty' + 'le>'}`;
}
