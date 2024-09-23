/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e65100',
        secondary: '#ff9800',
        border: '#e0e0e0',
        fg: '#ffffff'
      }
    }
  },
  plugins: []
};
