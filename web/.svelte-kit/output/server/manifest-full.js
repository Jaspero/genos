export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/favicon.ico","brand/genos-logo-black.svg","brand/genos-logo-white.svg","brand/logo.png","brand/logo.svg","brand/open-graph-featured.png","conflict-of-interest.pdf","data/.gitkeep","fonts/OpenSans-Bold.ttf","fonts/OpenSans-Regular.ttf","fonts/OpenSans-SemiBold.ttf","gep.pdf","icons/arrow_back.svg","icons/arrow_back_green.svg","icons/arrow_down.svg","icons/arrow_dropdown.svg","icons/arrow_forward.svg","icons/arrow_forward_green.svg","icons/close.svg","icons/linkedin-w.svg","icons/linkedin.svg","icons/menu.svg","icons/open-in-new.svg","icons/x-w.svg","icons/x.svg","illustrations/dna.jpg","illustrations/epigenetics.jpg","illustrations/glycomics.jpg","images/apple.svg","images/cge.jpg","images/close.svg","images/copy.svg","images/dna-graph.png","images/dna.png","images/dummy-img.jpg","images/epigenetics-graph.png","images/epigenetics-vertical.jpg","images/epigenetics.jpg","images/epigenetics.png","images/error.svg","images/favorites-unselected.svg","images/favorites.svg","images/footer.jpg","images/forensics-vertical.jpg","images/forensics.jpg","images/ga-card.jpg","images/glycanage.jpg","images/glycomics-graph.png","images/glycomics-vertical.jpg","images/glycomics.jpg","images/glycomics.png","images/glycoprofiling/analysis_of_human_agp_n-glycopeptides.jpg","images/glycoprofiling/analysis_of_human_c3_n-glycopeptides.jpg","images/glycoprofiling/analysis_of_human_igg_n-glycopeptides.jpg","images/glycoprofiling/analysis_of_rodent_igg_n-glycopeptides.jpg","images/glycoprofiling/analysis_of_total_human_iga_n-glycans.jpg","images/glycoprofiling/analysis_of_total_human_igg_n-glycans.jpg","images/glycoprofiling/analysis_of_total_human_serum.jpg","images/glycoprofiling/glycoprofiling-1.jpg","images/glycoprofiling/glycoprofiling-2.jpg","images/glycoprofiling/glycoprofiling-3.jpg","images/google-icon.svg","images/google.png","images/hgp-card.jpg","images/hgp.jpg","images/info.svg","images/lab.jpg","images/lbg-card.jpg","images/ms.jpg","images/pipettes.jpg","images/sample-types/pipettes.jpg","images/sample-types/sample.jpg","images/sample-types/spinner.jpg","images/success.svg","images/team.jpg","images/technologies/cge.jpg","images/technologies/dna-lab.jpg","images/technologies/ms.jpg","images/technologies/uplc.jpg","images/test-kit.jpg","images/texture.svg","images/uhplc.jpg","images/why-1.jpg","images/why-2.jpg","images/why-3.jpg","images/why-4.jpg","partners/projects-mobile.jpg","partners/projects.jpg","partners/universities-mobile.jpg","partners/universities.jpg","pdfs/cjenik.pdf","pdfs/en/1-1.pdf","pdfs/en/1-2.pdf","pdfs/en/1-3.pdf","pdfs/en/1-4.pdf","pdfs/en/1-5.pdf","pdfs/en/1-6.pdf","pdfs/en/1-7.pdf","pdfs/en/1-8.pdf","pdfs/en/1-9.pdf","pdfs/en/10-1.pdf","pdfs/en/11-1.pdf","pdfs/en/12-1.pdf","pdfs/en/13-1.pdf","pdfs/en/2-1.pdf","pdfs/en/2-2.pdf","pdfs/en/2-3.pdf","pdfs/en/2-4.pdf","pdfs/en/2-5.pdf","pdfs/en/3-1.pdf","pdfs/en/3-2.pdf","pdfs/en/3-3.pdf","pdfs/en/3-4.pdf","pdfs/en/3-5.pdf","pdfs/en/3-6.pdf","pdfs/en/4-1.pdf","pdfs/en/4-2.pdf","pdfs/en/5-1.pdf","pdfs/en/5-2.pdf","pdfs/en/5-3.pdf","pdfs/en/6-1.pdf","pdfs/en/6-2.pdf","pdfs/en/6-3.pdf","pdfs/en/6-4.pdf","pdfs/en/6-5.pdf","pdfs/en/6-6.pdf","pdfs/en/7-1.pdf","pdfs/en/7-2.pdf","pdfs/en/8-1.pdf","pdfs/en/8-2.pdf","pdfs/en/9-1.pdf","pdfs/en/epigen-toolbox.pdf","pdfs/en/glycocardio.pdf","pdfs/en/public-consultation.pdf","pdfs/en/report-on-the-conducted-public-consultation.pdf","pdfs/genbird-en.pdf","pdfs/genbird-hr.pdf","pdfs/genbird-order-form-appendix.pdf","pdfs/genbird-order-form.pdf","pdfs/hr/1-1.pdf","pdfs/hr/1-2.pdf","pdfs/hr/1-3.pdf","pdfs/hr/1-4.pdf","pdfs/hr/1-5.pdf","pdfs/hr/1-6.pdf","pdfs/hr/1-7.pdf","pdfs/hr/1-8.pdf","pdfs/hr/1-9.pdf","pdfs/hr/10-1.pdf","pdfs/hr/11-1.pdf","pdfs/hr/12-1.pdf","pdfs/hr/13-1.pdf","pdfs/hr/2-1.pdf","pdfs/hr/2-2.pdf","pdfs/hr/2-3.pdf","pdfs/hr/2-4.pdf","pdfs/hr/2-5.pdf","pdfs/hr/3-1.pdf","pdfs/hr/3-2.pdf","pdfs/hr/3-3.pdf","pdfs/hr/3-4.pdf","pdfs/hr/3-5.pdf","pdfs/hr/3-6.pdf","pdfs/hr/4-1.pdf","pdfs/hr/4-2.pdf","pdfs/hr/5-1.pdf","pdfs/hr/5-2.pdf","pdfs/hr/5-3.pdf","pdfs/hr/6-1.pdf","pdfs/hr/6-2.pdf","pdfs/hr/6-3.pdf","pdfs/hr/6-4.pdf","pdfs/hr/6-5.pdf","pdfs/hr/6-6.pdf","pdfs/hr/7-1.pdf","pdfs/hr/7-2.pdf","pdfs/hr/8-1.pdf","pdfs/hr/8-2.pdf","pdfs/hr/9-1.pdf","pdfs/hr/epigen-toolbox.pdf","pdfs/hr/glycocardio.pdf","pdfs/hr/public-consultation.pdf","pdfs/hr/report-on-the-conducted-public-consultation.pdf","pdfs/price-list.pdf","privacy-policy.pdf","sukob-interesa.pdf","team/akmacic.jpg","team/antolkovic.jpg","team/bakovic.jpg","team/bedekovic.jpg","team/beletic.jpg","team/bockor.jpg","team/borosak.jpg","team/briski.jpg","team/busic.jpg","team/butumovic.jpg","team/cindric.jpg","team/deris.jpg","team/doncevic.jpg","team/fancovic.jpg","team/foglar.jpg","team/francekovic.jpg","team/friganovic.jpg","team/frkatovic.jpg","team/grubesa.jpg","team/gudelj.jpg","team/gulisija.jpg","team/habazin.jpg","team/hanic.jpg","team/hmura.jpg","team/josipovic.jpg","team/juras.jpg","team/kavur.jpg","team/klaric.jpg","team/klicek.jpg","team/kristic.jpg","team/lalic.jpg","team/lauc.jpg","team/luksic.jpg","team/marjanovic.jpg","team/mijakovac.jpg","team/mraz.jpg","team/nikolic.jpg","team/novokmet.jpg","team/oreskovic.jpg","team/peic.jpg","team/petric.jpg","team/placeholder-female.jpg","team/placeholder-male.jpg","team/posavec.jpg","team/pribic.jpg","team/radovani.jpg","team/radovic.jpg","team/rapcan.jpg","team/razdorov.jpg","team/ruzic.jpg","team/simunovic.jpg","team/skelin.jpg","team/sostaric.jpg","team/stambuk-j.jpg","team/stambuk.jpg","team/stergar.jpg","team/vinicki.jpg","team/vuckovic.jpg","team/zaitseva.jpg","team/zoldos.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BGWiZw-E.js","app":"_app/immutable/entry/app.rZ-tquaa.js","imports":["_app/immutable/entry/start.BGWiZw-E.js","_app/immutable/chunks/entry.DpD4jmoC.js","_app/immutable/chunks/custom-element.DQtPqtwV.js","_app/immutable/chunks/index.BMbXZGcN.js","_app/immutable/entry/app.rZ-tquaa.js","_app/immutable/chunks/custom-element.DQtPqtwV.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.BrBjDjp-.js","_app/immutable/chunks/proxy.DU_vary1.js","_app/immutable/chunks/this.32Ewebps.js","_app/immutable/chunks/props.DpOBpuVa.js","_app/immutable/chunks/index-client.cakr4NJt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		routes: [
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/my-account",
				pattern: /^\/my-account\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/my-account/coupons",
				pattern: /^\/my-account\/coupons\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/my-account/favorites",
				pattern: /^\/my-account\/favorites\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/my-account/settings",
				pattern: /^\/my-account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/posts/[id]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/sign-up",
				pattern: /^\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/sitemap-hidden",
				pattern: /^\/sitemap-hidden\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/testing",
				pattern: /^\/testing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/[...url]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"url","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
