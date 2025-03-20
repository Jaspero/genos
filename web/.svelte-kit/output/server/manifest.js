export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/favicon.ico","brand/genos-logo-black.svg","brand/genos-logo-white.svg","brand/logo.png","brand/logo.svg","brand/open-graph-featured.png","data/.gitkeep","fonts/Gotham-Bold.otf","fonts/Gotham-Book.otf","icons/arrow_down.svg","images/apple.svg","images/copy.svg","images/dummy-img.jpg","images/error.svg","images/favorites-unselected.svg","images/favorites.svg","images/google-icon.svg","images/google.png","images/info.svg","images/success.svg","images/texture.svg","pdfs/1-1.pdf","pdfs/1-2.pdf","pdfs/1-3.pdf","pdfs/1-4.pdf","pdfs/1-5.pdf","pdfs/1-6.pdf","pdfs/1-7.pdf","pdfs/1-8.pdf","pdfs/10-1.pdf","pdfs/11-1.pdf","pdfs/12-1.pdf","pdfs/13-1.pdf","pdfs/2-1.pdf","pdfs/2-2.pdf","pdfs/2-3.pdf","pdfs/2-4.pdf","pdfs/2-5.pdf","pdfs/3-1.pdf","pdfs/3-2.pdf","pdfs/3-3.pdf","pdfs/3-4.pdf","pdfs/3-5.pdf","pdfs/3-6.pdf","pdfs/4-1.pdf","pdfs/4-2.pdf","pdfs/5-1.pdf","pdfs/5-2.pdf","pdfs/5-3.pdf","pdfs/6-1.pdf","pdfs/6-2.pdf","pdfs/6-3.pdf","pdfs/6-5.pdf","pdfs/6-6.pdf","pdfs/6-7.pdf","pdfs/7-1.pdf","pdfs/7-2.pdf","pdfs/8-1.pdf","pdfs/8-2.pdf","pdfs/9-1.pdf","pdfs/cjenik.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".otf":"font/otf",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.DpbzzWjc.js","app":"_app/immutable/entry/app.DKQv-r_m.js","imports":["_app/immutable/entry/start.DpbzzWjc.js","_app/immutable/chunks/entry.ryg6NfEW.js","_app/immutable/chunks/custom-element.BA3kAs82.js","_app/immutable/chunks/index.DtON5jVV.js","_app/immutable/entry/app.DKQv-r_m.js","_app/immutable/chunks/custom-element.BA3kAs82.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.D1qQ5yWV.js","_app/immutable/chunks/proxy.C3VmEzyS.js","_app/immutable/chunks/this.Db-LeQmj.js","_app/immutable/chunks/props.Xk-YzMbx.js","_app/immutable/chunks/index-client.DC-y6gSa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/my-account",
				pattern: /^\/my-account\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/my-account/coupons",
				pattern: /^\/my-account\/coupons\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/my-account/favorites",
				pattern: /^\/my-account\/favorites\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/my-account/settings",
				pattern: /^\/my-account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/posts/[id]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sign-up",
				pattern: /^\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/sitemap-hidden",
				pattern: /^\/sitemap-hidden\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/testing",
				pattern: /^\/testing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[...url]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"url","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
