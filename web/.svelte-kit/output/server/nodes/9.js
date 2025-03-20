import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Y5dGqsi1.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.BA3kAs82.js","_app/immutable/chunks/if.D1qQ5yWV.js","_app/immutable/chunks/html.DftSZTpL.js","_app/immutable/chunks/css.BoFqUIVp.js","_app/immutable/chunks/attributes.BP-pkpGu.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.N0aafeFz.js","_app/immutable/chunks/props.Xk-YzMbx.js","_app/immutable/chunks/proxy.C3VmEzyS.js","_app/immutable/chunks/meta.store.D6pooXDk.js","_app/immutable/chunks/index.DtON5jVV.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
