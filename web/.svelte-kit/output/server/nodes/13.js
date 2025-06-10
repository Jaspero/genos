import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.CMpdK9b3.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.DQtPqtwV.js","_app/immutable/chunks/each.CBDd4fNw.js","_app/immutable/chunks/attributes.Ip4Mnoum.js","_app/immutable/chunks/misc.DePaIsbk.js","_app/immutable/chunks/lifecycle.By80OOUV.js","_app/immutable/chunks/props.DpOBpuVa.js","_app/immutable/chunks/proxy.DU_vary1.js","_app/immutable/chunks/meta.store.Q6Z8Tcx4.js","_app/immutable/chunks/index.BMbXZGcN.js","_app/immutable/chunks/config.const.D0DIsJfW.js"];
export const stylesheets = [];
export const fonts = [];
