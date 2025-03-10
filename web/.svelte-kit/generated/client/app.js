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
	() => import('./nodes/13')
];

export const server_loads = [0,2];

export const dictionary = {
		"/checkout": [4],
		"/my-account": [5,[2]],
		"/my-account/coupons": [6,[2]],
		"/my-account/favorites": [7,[2]],
		"/my-account/settings": [8,[2]],
		"/posts/[id]": [~9],
		"/reset-password": [10],
		"/sign-in": [11],
		"/sign-up": [12],
		"/sitemap-hidden": [~13],
		"/[...url]": [~3]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';