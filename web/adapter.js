import path from 'node:path';

/** @type {import('./index.js').default} */
export default function (options) {
	return {
		name: '@sveltejs/adapter-static',

		async adapt(builder) {
			if (!options?.fallback) {
				const dynamic_routes = builder.routes.filter((route) => route.prerender !== true);
				if (dynamic_routes.length > 0 && options?.strict !== false) {
					const prefix = path.relative('.', builder.config.kit.files.routes);
					builder.log.error(
						`@sveltejs/adapter-static: all routes must be fully prerenderable, but found the following routes that are dynamic:  ${dynamic_routes.map((route) => `  - ${path.posix.join(prefix, route.id)}`).join('\n')}`
					);
					throw new Error('Encountered dynamic routes');
				}
			}

			const {
				pages = 'build',
				assets = pages,
				fallback,
				precompress
			} = options;

			if (options.clearBuild) {
				builder.rimraf(assets);
				builder.rimraf(pages);
			}

			builder.generateEnvModule();
			
			if (options.clearBuild) {
				builder.writeClient(assets);
			}

			builder.writePrerendered(pages);

			if (fallback) {
				await builder.generateFallback(path.join(pages, fallback));
			}

			if (precompress) {
				builder.log.minor('Compressing assets and pages');
				if (pages === assets) {
					await builder.compress(assets);
				} else {
					await Promise.all([builder.compress(assets), builder.compress(pages)]);
				}
			}

			if (pages === assets) {
				builder.log(`Wrote site to "${pages}"`);
			} else {
				builder.log(`Wrote pages to "${pages}" and assets to "${assets}"`);
			}
		}
	};
}