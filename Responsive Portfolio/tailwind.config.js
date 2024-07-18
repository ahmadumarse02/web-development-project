/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***.{html,js}"],
  theme: {
    screens: {
      'sm': '548px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'Deep-Gray': '#0A0A0F',
        'primary': '#079211',
        'white': '#FFFFFF',
        'Light-Gray': '#D1D5DB',
        'Gray': '#808080',
        'Light-Dark': '#313131',
        'Dark': '#101017',
        'Deep-Dark': '#050507',
      },
      fontFamily:{
        'inter' : ['Inter'],
      },
      container: {
        center:true,
        padding: {
          DEFAULT: '2rem',
          'sm': '1rem',
          'md': '1.5rem',
          'lg': '2rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
    },
  },
  plugins: [],
}
}