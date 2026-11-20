import * as universal from '../entries/pages/tools/plasmid-builder/_layout.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tools/plasmid-builder/+layout.ts";
export const imports = ["_app/immutable/nodes/3.DS_v8385.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.mhvlARxE.js"];
export const stylesheets = [];
export const fonts = [];
