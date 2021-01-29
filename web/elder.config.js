module.exports = {
  origin: 'https://glycanage.com',
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  server: {
    prefix: '',
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {
    '@elderjs/plugin-browser-reload': {
      port: 8080,
    },
    '@elderjs/plugin-sitemap': {
      origin: '',
      exclude: [],
      routeDetails: {},
      lastUpdate: {},
    },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
  css: 'inline'
};
