/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#191919',
        'secondary': '#333456',
        'tertiary': '#595B83',
        'woman': '#F4ABC4'
      },
      fontFamily:{
        'elegant': 'Playfair Display, serif',
        'kalnia': 'Kalnia, serif',
        'montserrat': 'Montserrat, sans-serif'
      }
    },
  },
  plugins: [],
}

