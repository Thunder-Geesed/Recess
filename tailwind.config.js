/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/*.{html,js}',
    './src/components/*.{js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
