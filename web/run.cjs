/**
 * This file contains various configurations
 * for running apps locally for development
 */
const { readFile, writeFile } = require('fs/promises');
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

  let env;

  try {
    env = (await readFile(files.env)).toString();
  } catch (e) {
    console.log(e);
  }

  const toExec = [writeFile(`./src/lib/utils/env-config.ts`, envConfig)];

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
