import * as universal from '../entries/pages/posts/_id_/_page.ts.js';
import stylesheet_3 from '../stylesheets/3.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/12.B1A_bStU.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.mhvlARxE.js","_app/immutable/chunks/if.IyUw3ksZ.js","_app/immutable/chunks/html.Co8Rwx2k.js","_app/immutable/chunks/attributes.DB9NLSEX.js","_app/immutable/chunks/misc.LYwhCSXd.js","_app/immutable/chunks/lifecycle.CIyOmXY_.js","_app/immutable/chunks/store.CdSP504z.js","_app/immutable/chunks/index.CmaTwc1P.js","_app/immutable/chunks/index-client.CO84qTDc.js","_app/immutable/chunks/stores.Dj4Y8vqw.js","_app/immutable/chunks/entry.DAajzI2W.js","_app/immutable/chunks/meta.store.DqQ2Z079.js","_app/immutable/chunks/config.const.BU4oKyB4.js","_app/immutable/chunks/firebase.Dz8Y6U0A.js","_app/immutable/chunks/index.esm.CL0ue_pC.js","_app/immutable/chunks/language.C77efH0_.js"];
export const stylesheets = ["_app/immutable/assets/12.CkZOffRA.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/12.CkZOffRA.css": stylesheet_3
});
