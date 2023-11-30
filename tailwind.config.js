/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pallete :{
          100: '#006938',
          200: '#8696BB',
        },
        green: {
          dark: '#006938'
        },
        black: '#292D32',
        blue: '#0056FF'
      }
    },
  },
  plugins: [],
}