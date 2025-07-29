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
	() => import('./nodes/15')
];

export const server_loads = [0,2];

export const dictionary = {
		"/404": [3],
		"/checkout": [5],
		"/my-account": [6,[2]],
		"/my-account/coupons": [7,[2]],
		"/my-account/favorites": [8,[2]],
		"/my-account/settings": [9,[2]],
		"/posts/[id]": [~10],
		"/reset-password": [11],
		"/sign-in": [12],
		"/sign-up": [13],
		"/sitemap-hidden": [~14],
		"/testing": [15],
		"/[...url]": [~4]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';