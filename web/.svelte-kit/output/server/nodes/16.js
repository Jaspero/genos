import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.quCVCI6e.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.mhvlARxE.js","_app/immutable/chunks/each.SlJ2YNLW.js","_app/immutable/chunks/attributes.DB9NLSEX.js","_app/immutable/chunks/misc.LYwhCSXd.js","_app/immutable/chunks/lifecycle.CIyOmXY_.js","_app/immutable/chunks/props.CBGsWOaF.js","_app/immutable/chunks/proxy.BcSgNFsz.js","_app/immutable/chunks/meta.store.DqQ2Z079.js","_app/immutable/chunks/index.CmaTwc1P.js","_app/immutable/chunks/config.const.BU4oKyB4.js"];
export const stylesheets = [];
export const fonts = [];
