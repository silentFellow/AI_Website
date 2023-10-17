/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#12151a',
        'secondary-color':'#282A37',
        'tertiary-color':'#015C9A'
      }
    },
  },
  plugins: [],
}

