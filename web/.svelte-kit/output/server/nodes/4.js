import stylesheet_1 from '../stylesheets/1.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/404/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D-NTm1Ec.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.mhvlARxE.js","_app/immutable/chunks/lifecycle.CIyOmXY_.js","_app/immutable/chunks/store.CdSP504z.js","_app/immutable/chunks/index.CmaTwc1P.js","_app/immutable/chunks/language.C77efH0_.js","_app/immutable/chunks/meta.store.DqQ2Z079.js","_app/immutable/chunks/config.const.BU4oKyB4.js"];
export const stylesheets = ["_app/immutable/assets/4.DHjG2jIS.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/4.DHjG2jIS.css": stylesheet_1
});
