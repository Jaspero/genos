import * as server from '../entries/pages/posts/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.BroY1xCE.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.Be9JRDZa.js","_app/immutable/chunks/if.DHrsNizm.js","_app/immutable/chunks/html.CRmJumZG.js","_app/immutable/chunks/css.BsuxAb-5.js","_app/immutable/chunks/attributes.Cqk6Ie6U.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.Cqhf0dYa.js","_app/immutable/chunks/props.BcZkuvB_.js","_app/immutable/chunks/proxy.Cwq4tkdj.js","_app/immutable/chunks/meta.store.ZQREEzaj.js","_app/immutable/chunks/index.IR87m7SF.js","_app/immutable/chunks/config.const.CA_UTROv.js","_app/immutable/chunks/image-gallery.wc.igZ_jBv8.js","_app/immutable/chunks/index.DNKoaJak.js"];
export const stylesheets = [];
export const fonts = [];
