import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Dv91h85b.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.CVpG6SXP.js","_app/immutable/chunks/if.JQHAtFvm.js","_app/immutable/chunks/html.DbmxEHYj.js","_app/immutable/chunks/css.LBB8QDOA.js","_app/immutable/chunks/attributes.Cu3nlHM4.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.C0LKuuzC.js","_app/immutable/chunks/props.BJbN4VyR.js","_app/immutable/chunks/proxy.DCnwnetm.js","_app/immutable/chunks/meta.store.B2hk3icq.js","_app/immutable/chunks/index.8khrGofb.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
