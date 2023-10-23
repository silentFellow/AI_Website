/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#F5F5F5', 
        'secondary': '#454545', 
        'ascent': '#2E7188', 
        'bg': '#F5F5DC',  
        /* 'primary': '#000', 
        'secondary': '#15e9c9', 
        'ascent': '#2E7188', 
        'bg': '#F5F5DC'
        */
        'card-head':'#137DE0'
      }
    },
  },
  plugins: [],
}

