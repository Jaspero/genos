import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.SouJ-nCX.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.YfTZRdDm.js","_app/immutable/chunks/html.Cd-tYx33.js","_app/immutable/chunks/css.C4s6Pmy9.js","_app/immutable/chunks/attributes.BLb7X-Of.js","_app/immutable/chunks/misc.CIjl-xZq.js","_app/immutable/chunks/lifecycle.DDiEpaHd.js","_app/immutable/chunks/props.v80mbUAc.js","_app/immutable/chunks/proxy.B8pEhNyt.js","_app/immutable/chunks/meta.store.CkT33Ptq.js","_app/immutable/chunks/index.BJiC22_r.js","_app/immutable/chunks/config.const.D0DIsJfW.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
