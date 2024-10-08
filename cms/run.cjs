/**
 * This file contains various configurations
 * for running apps locally for development
 */
const { readFile, writeFile } = require('fs/promises');
const postcss = require('postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

const environment = process.argv[2];

async function exec() {
  const fileMap = {
    dev: {
      envConfig: './env-config.dev.js',
      env: `./dev.json`
    },
    prod: {
      envConfig: './env-config.prod.js',
      env: `./prod.json`
    }
  };
  const files = fileMap[environment];
  const envConfig = (await readFile(files.envConfig)).toString();
  const sharedCss = '../shared/styles/index.pcss';

  let env;

  try {
    env = (await readFile(files.env)).toString();
  } catch {}

  const toExec = [
    writeFile(`./src/lib/utils/env-config.ts`, envConfig),
    readFile(sharedCss)
      .then((file) => postcss(atImport(), autoprefixer()).process(file, { from: sharedCss }))
      .then(({ css }) => writeFile(`./static/css/shared.css`, css))
  ];

  const constFiles = await fs.promises.readdir('../shared/consts');
  toExec.push(
    ...constFiles.map(file => {
      return fs.promises.copyFile('../shared/consts/' + file, './src/lib/consts/' + file);
    })
  );

  if (env) {
    toExec.push(writeFile(`./key.json`, env));
  }

  await Promise.all(toExec);
}

exec()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
