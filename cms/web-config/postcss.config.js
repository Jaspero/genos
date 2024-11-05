import aImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    aImport(),
    tailwindcss({
      config: '../web/tailwind.config.js'
    }),
    autoprefixer()
  ]
};
