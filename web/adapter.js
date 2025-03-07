import path from 'node:path';
/*import minifyHtml from '@minify-html/node';*/
import { join } from 'path';
import { readFile, writeFile } from 'node:fs/promises';

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

      const { pages = 'build', assets = pages, fallback, precompress, deleted = [], clearBuild } = options;

      if (clearBuild) {
        builder.rimraf(assets);
        builder.rimraf(pages);
      }

      console.log(deleted);
      if (deleted) {
        await Promise.all(
          deleted.map(file => builder.rimraf(file))
        )
      }

      builder.generateEnvModule();

      if (clearBuild) {
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

      for (const page of builder.prerendered.pages) {
        const htmlPath = join(
          pages,
          ...page.slice(1).map((p) => (typeof p === 'string' ? p : p.file))
        );

        const buffer = await readFile(htmlPath);
        /*const minified = minifyHtml.minify(buffer, {
          do_not_minify_doctype: true,
          ensure_spec_compliant_unquoted_attribute_values: true,
          keep_spaces_between_attributes: true,
          minify_css: true,
          minify_js: false
        });*/

        await writeFile(htmlPath, minified);
      }

      if (pages === assets) {
        builder.log(`Wrote site to "${pages}"`);
      } else {
        builder.log(`Wrote pages to "${pages}" and assets to "${assets}"`);
      }
    }
  };
}
