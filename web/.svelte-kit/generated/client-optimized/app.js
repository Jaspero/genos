export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/404": [4],
		"/checkout": [6],
		"/my-account": [7,[2]],
		"/my-account/coupons": [8,[2]],
		"/my-account/favorites": [9,[2]],
		"/my-account/plasmid-orders": [10,[2]],
		"/my-account/settings": [11,[2]],
		"/posts/[id]": [~12],
		"/reset-password": [13],
		"/sign-in": [14],
		"/sign-up": [15],
		"/sitemap-hidden": [~16],
		"/testing": [17],
		"/tools/plasmid-builder": [18,[3]],
		"/[...url]": [~5]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';