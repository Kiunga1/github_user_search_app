/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primaryBlue': '#0079FF',
        'gray-lght':'#e5e7eb',
        'gray-100':'#697C9A',
        'gray-200':'#4B6A9B',
        'gray-300':'#2B3442',
        'primaryBlack':'#141D2F',
        'white': '#FFFFFF'
      },
      typography:{
        h1:'26px',
        h2:'22px',
        h3:'16px',
        h4:'13px'
      },
      fontFamily:{
        'spaceMono':['"Space Mono"',],

      }
    },
  },
  plugins: [],
}

