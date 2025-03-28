import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.Bzwdjmo1.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.1_yRwOlX.js","_app/immutable/chunks/each.BeYqxMqr.js","_app/immutable/chunks/attributes.BsrKMTV0.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.DcUuhXT_.js","_app/immutable/chunks/props.Cg69NPis.js","_app/immutable/chunks/proxy.DLyOzIhp.js","_app/immutable/chunks/meta.store.BQTG_LVo.js","_app/immutable/chunks/index.q8aNrb-s.js","_app/immutable/chunks/config.const.CA_UTROv.js"];
export const stylesheets = [];
export const fonts = [];
