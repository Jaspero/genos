/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontSize: {
      '2xs': '1.25rem',
      xs: '1.375rem',
      sm: '1.875rem',
      base: '2.5rem',
      lg: '3.125rem',
      xl: '3.75rem',
      '2xl': '5rem',
      '3xl': '7.5rem',
      '4xl': '10rem',
    }
  },
  plugins: []
};