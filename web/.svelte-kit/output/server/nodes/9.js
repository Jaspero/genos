import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.CXm-6OCE.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.ByhzGb1h.js","_app/immutable/chunks/if.vKngAeMe.js","_app/immutable/chunks/html.BpFOIylS.js","_app/immutable/chunks/css.CXaI7eBR.js","_app/immutable/chunks/attributes.BMgrQkzn.js","_app/immutable/chunks/misc.Q6Mn2PlX.js","_app/immutable/chunks/class.C-8RiahO.js","_app/immutable/chunks/index.DYGLkbmK.js","_app/immutable/chunks/lifecycle.BR0ZKU9u.js","_app/immutable/chunks/props.-W8eUQAU.js","_app/immutable/chunks/proxy.2rEUfi5_.js","_app/immutable/chunks/index-client.Biu3vJ0Y.js","_app/immutable/chunks/meta.store.D_MCNmTK.js","_app/immutable/chunks/index.DqsyI3Bh.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.CZZbQSui.js","_app/immutable/chunks/index.CRqRBLuz.js"];
export const stylesheets = [];
export const fonts = [];
