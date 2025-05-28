import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.CBotLZlA.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.DQtPqtwV.js","_app/immutable/chunks/html.Dn7-qKOW.js","_app/immutable/chunks/css.osYD52Gu.js","_app/immutable/chunks/attributes.Ip4Mnoum.js","_app/immutable/chunks/misc.DePaIsbk.js","_app/immutable/chunks/lifecycle.By80OOUV.js","_app/immutable/chunks/props.DpOBpuVa.js","_app/immutable/chunks/proxy.DU_vary1.js","_app/immutable/chunks/meta.store.M4SqyN1h.js","_app/immutable/chunks/index.BMbXZGcN.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
