import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.VzhPy8nu.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.ByhzGb1h.js","_app/immutable/chunks/each.DMO57vYG.js","_app/immutable/chunks/attributes.BMgrQkzn.js","_app/immutable/chunks/misc.Q6Mn2PlX.js","_app/immutable/chunks/lifecycle.BR0ZKU9u.js","_app/immutable/chunks/props.-W8eUQAU.js","_app/immutable/chunks/proxy.2rEUfi5_.js","_app/immutable/chunks/meta.store.D_MCNmTK.js","_app/immutable/chunks/index.DqsyI3Bh.js","_app/immutable/chunks/config.const.CA_UTROv.js"];
export const stylesheets = [];
export const fonts = [];
