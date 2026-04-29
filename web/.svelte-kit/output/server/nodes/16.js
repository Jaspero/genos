import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.Dvda7UbT.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.YfTZRdDm.js","_app/immutable/chunks/each.CDth55hk.js","_app/immutable/chunks/attributes.BLb7X-Of.js","_app/immutable/chunks/misc.CIjl-xZq.js","_app/immutable/chunks/lifecycle.DDiEpaHd.js","_app/immutable/chunks/props.v80mbUAc.js","_app/immutable/chunks/proxy.B8pEhNyt.js","_app/immutable/chunks/meta.store.CkT33Ptq.js","_app/immutable/chunks/index.BJiC22_r.js","_app/immutable/chunks/config.const.D0DIsJfW.js"];
export const stylesheets = [];
export const fonts = [];
