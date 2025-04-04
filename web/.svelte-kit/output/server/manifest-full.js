export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/favicon.ico","brand/genos-logo-black.svg","brand/genos-logo-white.svg","brand/logo.png","brand/logo.svg","brand/open-graph-featured.png","data/.gitkeep","fonts/Gotham-Bold.otf","fonts/Gotham-Book.otf","icons/arrow_down.svg","icons/close.svg","icons/open-in-new.svg","images/apple.svg","images/close.svg","images/copy.svg","images/dummy-img.jpg","images/error.svg","images/favorites-unselected.svg","images/favorites.svg","images/ga-card.jpg","images/glycoprofiling/glycoprofiling-1.jpg","images/glycoprofiling/glycoprofiling-2.jpg","images/glycoprofiling/glycoprofiling-3.jpg","images/google-icon.svg","images/google.png","images/hgp-card.jpg","images/info.svg","images/lab.jpg","images/lbg-card.jpg","images/sample-types/pipettes.jpg","images/sample-types/sample.jpg","images/sample-types/spinner.jpg","images/success.svg","images/technologies/cge.jpg","images/technologies/dna-lab.jpg","images/technologies/ms.jpg","images/technologies/uplc.jpg","images/texture.svg","pdfs/1-1.pdf","pdfs/1-2.pdf","pdfs/1-3.pdf","pdfs/1-4.pdf","pdfs/1-5.pdf","pdfs/1-6.pdf","pdfs/1-7.pdf","pdfs/1-8.pdf","pdfs/10-1.pdf","pdfs/11-1.pdf","pdfs/12-1.pdf","pdfs/13-1.pdf","pdfs/2-1.pdf","pdfs/2-2.pdf","pdfs/2-3.pdf","pdfs/2-4.pdf","pdfs/2-5.pdf","pdfs/3-1.pdf","pdfs/3-2.pdf","pdfs/3-3.pdf","pdfs/3-4.pdf","pdfs/3-5.pdf","pdfs/3-6.pdf","pdfs/4-1.pdf","pdfs/4-2.pdf","pdfs/5-1.pdf","pdfs/5-2.pdf","pdfs/5-3.pdf","pdfs/6-1.pdf","pdfs/6-2.pdf","pdfs/6-3.pdf","pdfs/6-5.pdf","pdfs/6-6.pdf","pdfs/6-7.pdf","pdfs/7-1.pdf","pdfs/7-2.pdf","pdfs/8-1.pdf","pdfs/8-2.pdf","pdfs/9-1.pdf","pdfs/cjenik.pdf","pdfs/genbird-hr.pdf","pdfs/price-list.pdf","team/akmacic.jpg","team/antolkovic.jpg","team/bakovic.jpg","team/bedekovic.jpg","team/beletic.jpg","team/bockor.jpg","team/borosak.jpg","team/briski.jpg","team/busic.jpg","team/butumovic.jpg","team/cindric.jpg","team/deris.jpg","team/fancovic.jpg","team/foglar.jpg","team/francekovic.jpg","team/friganovic.jpg","team/frkatovic.jpg","team/grubesa.jpg","team/gudelj.jpg","team/gulisija.jpg","team/habazin.jpg","team/hanic.jpg","team/hmura.jpg","team/josipovic.jpg","team/juras.jpg","team/kavur.jpg","team/klaric.jpg","team/klicek.jpg","team/kristic.jpg","team/lalic.jpg","team/lauc.jpg","team/luksic.jpg","team/marjanovic.jpg","team/mijakovac.jpg","team/mraz.jpg","team/novokmet.jpg","team/oreskovic.jpg","team/peic.jpg","team/petric.jpg","team/placeholder-female.jpg","team/placeholder-male.jpg","team/posavec.jpg","team/pribic.jpg","team/radovani.jpg","team/rapcan.jpg","team/razdorov.jpg","team/ruzic.jpg","team/simunovic.jpg","team/skelin.jpg","team/sostaric.jpg","team/stambuk-j.jpg","team/stambuk.jpg","team/stergar.jpg","team/vinicki.jpg","team/vuckovic.jpg","team/zaitseva.jpg","team/zoldos.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".otf":"font/otf",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.BOGTB1ex.js","app":"_app/immutable/entry/app.CKUE6WZ_.js","imports":["_app/immutable/entry/start.BOGTB1ex.js","_app/immutable/chunks/entry.Du9LNTDk.js","_app/immutable/chunks/custom-element.AREl8MZg.js","_app/immutable/chunks/index.B98IM8ce.js","_app/immutable/entry/app.CKUE6WZ_.js","_app/immutable/chunks/custom-element.AREl8MZg.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.LOaGCDQ9.js","_app/immutable/chunks/proxy.DubxRdJO.js","_app/immutable/chunks/this._mQ0Rvvn.js","_app/immutable/chunks/props.D9ta2Nwk.js","_app/immutable/chunks/index-client.Ddb_xwJg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
