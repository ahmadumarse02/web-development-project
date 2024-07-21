/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      container: {
        center:true,
        padding:{

        }
      },
      colors:{
        primary:'#F54748',
        secondary:'#FDC55E'
      }
    },
  },
  plugins: [],
}

