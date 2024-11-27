export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/favicon.ico","brand/logo.png","brand/logo.svg","brand/open-graph-featured.png","data/.gitkeep","fonts/Gotham-Bold.otf","fonts/Gotham-Book.otf","images/apple.svg","images/copy.svg","images/dummy-img.jpg","images/error.svg","images/favorites-unselected.svg","images/favorites.svg","images/google-icon.svg","images/google.png","images/info.svg","images/success.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".otf":"font/otf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.FTJuk3hY.js","app":"_app/immutable/entry/app.CuG4_WDB.js","imports":["_app/immutable/entry/start.FTJuk3hY.js","_app/immutable/chunks/entry.CVdcaSFl.js","_app/immutable/chunks/custom-element.Be9JRDZa.js","_app/immutable/chunks/index.IR87m7SF.js","_app/immutable/entry/app.CuG4_WDB.js","_app/immutable/chunks/custom-element.Be9JRDZa.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.DHrsNizm.js","_app/immutable/chunks/proxy.Cwq4tkdj.js","_app/immutable/chunks/this.oXrpnxZY.js","_app/immutable/chunks/props.BcZkuvB_.js","_app/immutable/chunks/index-client.DfkwVSc5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			__memo(() => import('./nodes/13.js'))
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
