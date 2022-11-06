/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif']
      },
      colors: {
        'pry-clr-0': 'rgb(241, 245, 248)',
        'pry-clr-1': 'rgb(16, 42, 66)',
        'pry-clr-2': 'rgb(197, 157, 95)',
        'pry-clr-3': 'rgb(97, 125, 152)'
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1200px"
      }
    },
  },
  plugins: [],
}