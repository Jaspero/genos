const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const { firestore } = require('firebase-admin');

async function shared() {

  const fs = firestore();
  const [news, projects] = await Promise.all([
    fs.collection('news').orderBy('createdOn', 'desc').get(),
    fs.collection('projects').orderBy('createdOn', 'desc').get(),
  ]);

  return {
    projects: projects.docs.map(it => ({id: it.id, ...it.data()})),
    news: news.docs.map(it => ({id: it.id, ...it.data()}))
  }
}

const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },
  {
    hook: 'bootstrap',
    name: 'environment',
    description: 'Populates environment information for the routes.',
    priority: 99,
    run: async ({data}) => {
      data.shared = await shared();
      data.dev = process.env.NODE_ENV !== 'production';
    }
  }
];
module.exports = hooks;
