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
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        'gradient-2': 'linear-gradient(to right, #636FA4, #E8CBC0)',
        'gradient-3': 'linear-gradient(to left, #6A82FB, #FC5C7D)',
        'gradient-4': 'linear-gradient(to right, #F0CB35, #C02425)',
      }
    },
  },
  plugins: [],
}
