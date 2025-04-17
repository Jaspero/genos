import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.zDPIFuag.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.AREl8MZg.js","_app/immutable/chunks/if.LOaGCDQ9.js","_app/immutable/chunks/html.DrtXUrAH.js","_app/immutable/chunks/css.DvG97zWr.js","_app/immutable/chunks/attributes.JHywwXfg.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/class.CANlI1U3.js","_app/immutable/chunks/index.DhZRiUTv.js","_app/immutable/chunks/lifecycle.CcW39cT5.js","_app/immutable/chunks/props.D9ta2Nwk.js","_app/immutable/chunks/proxy.DubxRdJO.js","_app/immutable/chunks/index-client.Ddb_xwJg.js","_app/immutable/chunks/meta.store.BoiVVj5z.js","_app/immutable/chunks/index.B98IM8ce.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
