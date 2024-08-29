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
        'lime': '#4CCD99',
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#2B2B2B',
        'dark-gray-3': '#666666',
        'light-gray': '#9D9D9D',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        'gradient-2': 'linear-gradient(to right, #636FA4, #E8CBC0)',
        'gradient-3': 'linear-gradient(to right, #b993d6, #8ca6db)',
        'gradient-4': 'linear-gradient(to left, #fc4a1a, #f7b733)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
