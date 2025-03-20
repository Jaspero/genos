import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.Dqn5eqc2.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.BA3kAs82.js","_app/immutable/chunks/each.B-smcunX.js","_app/immutable/chunks/attributes.BP-pkpGu.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/lifecycle.N0aafeFz.js","_app/immutable/chunks/props.Xk-YzMbx.js","_app/immutable/chunks/proxy.C3VmEzyS.js","_app/immutable/chunks/meta.store.D6pooXDk.js","_app/immutable/chunks/index.DtON5jVV.js","_app/immutable/chunks/config.const.CA_UTROv.js"];
export const stylesheets = [];
export const fonts = [];
