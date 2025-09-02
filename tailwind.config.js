/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Angular templates + components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // match Angular Material theme
        secondary: '#f59e0b',
        danger: '#dc2626',
      },
    },
  },
  plugins: [],
};
