import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.BiYycTz6.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.ClMSU3hd.js","_app/immutable/chunks/each.Df2dgusH.js","_app/immutable/chunks/attributes.Cy0qgvKV.js","_app/immutable/chunks/misc.Bq9Mb5j8.js","_app/immutable/chunks/lifecycle.Buqu_Q2D.js","_app/immutable/chunks/props.g5Lm9yO4.js","_app/immutable/chunks/proxy.BjWkzdpV.js","_app/immutable/chunks/meta.store.CGteVmBv.js","_app/immutable/chunks/index.BzwSP_xn.js","_app/immutable/chunks/config.const.D0DIsJfW.js"];
export const stylesheets = [];
export const fonts = [];
