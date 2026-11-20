import stylesheet_2 from '../stylesheets/2.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/my-account/coupons/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.Y8SXuBsD.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.mhvlARxE.js","_app/immutable/chunks/if.IyUw3ksZ.js","_app/immutable/chunks/each.SlJ2YNLW.js","_app/immutable/chunks/class.Cy2QoZAX.js","_app/immutable/chunks/select.BapzSE6Y.js","_app/immutable/chunks/shared.DxUBbfLL.js","_app/immutable/chunks/misc.LYwhCSXd.js","_app/immutable/chunks/proxy.BcSgNFsz.js","_app/immutable/chunks/lifecycle.CIyOmXY_.js","_app/immutable/chunks/firebase.Dz8Y6U0A.js","_app/immutable/chunks/index.esm.CL0ue_pC.js","_app/immutable/chunks/index.CmaTwc1P.js","_app/immutable/chunks/index-client.CO84qTDc.js","_app/immutable/chunks/meta.store.DqQ2Z079.js","_app/immutable/chunks/config.const.BU4oKyB4.js"];
export const stylesheets = ["_app/immutable/assets/8.BVPJrdcH.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/8.BVPJrdcH.css": stylesheet_2
});
