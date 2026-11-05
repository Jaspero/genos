import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.GdLU_w1i.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.wWu55SxI.js","_app/immutable/chunks/each.BEpxQ-P-.js","_app/immutable/chunks/attributes.DL6hCz3k.js","_app/immutable/chunks/misc.iI9nKUW9.js","_app/immutable/chunks/lifecycle.DdmnWoTO.js","_app/immutable/chunks/props.DPdsrfQK.js","_app/immutable/chunks/proxy.C1cbZtWe.js","_app/immutable/chunks/meta.store.BzGMpHGX.js","_app/immutable/chunks/index.BA6WNnuO.js","_app/immutable/chunks/config.const.D0DIsJfW.js"];
export const stylesheets = [];
export const fonts = [];
