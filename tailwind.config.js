/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        'primary': '#000', //#1E201E', '#191815'
        'secondary': '#F7F9F2',
        'tertiary': '#EEEEEE',
        'link': '#4C3BCF',
        'type-gray': '#31363F',
        'lime': '#4CCD99' 
      }
    },
  },
  plugins: [],
}
