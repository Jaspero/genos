import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Cr6_Tuik.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.1_yRwOlX.js","_app/immutable/chunks/if.D4dqyz6E.js","_app/immutable/chunks/html.BLgYzR14.js","_app/immutable/chunks/css.BMSbW-ZH.js","_app/immutable/chunks/attributes.BsrKMTV0.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/class.BK_zQMZg.js","_app/immutable/chunks/index.GargVmJ2.js","_app/immutable/chunks/lifecycle.DcUuhXT_.js","_app/immutable/chunks/props.Cg69NPis.js","_app/immutable/chunks/proxy.DLyOzIhp.js","_app/immutable/chunks/index-client.CHjiWRxp.js","_app/immutable/chunks/meta.store.BQTG_LVo.js","_app/immutable/chunks/index.q8aNrb-s.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
