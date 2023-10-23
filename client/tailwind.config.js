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
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
       backgroundImage: {
        'card-bg': "url('./src/assets/cardbanner.jpg')",
        
      }
    },
  },
  plugins: [],
}

