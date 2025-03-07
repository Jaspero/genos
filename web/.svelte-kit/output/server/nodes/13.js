import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.DeJ5XXAl.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.CVpG6SXP.js","_app/immutable/chunks/each.E7xZXVkq.js","_app/immutable/chunks/attributes.Cu3nlHM4.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.C0LKuuzC.js","_app/immutable/chunks/props.BJbN4VyR.js","_app/immutable/chunks/proxy.DCnwnetm.js","_app/immutable/chunks/meta.store.B2hk3icq.js","_app/immutable/chunks/index.8khrGofb.js","_app/immutable/chunks/config.const.CA_UTROv.js"];
export const stylesheets = [];
export const fonts = [];
