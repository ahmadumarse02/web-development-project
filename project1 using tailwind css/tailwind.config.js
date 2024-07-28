/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        'padding': '1rem',
      },
      backgroundImage: {
        'hero-image': "url('/images/h1_hero.jpg')",
        'footer-texture': "url('/images/footer-texture.png')",
        'bg-heading': "url('/images/shape1.png')",
        'wantToWork-area' : "url('/images/section_bg02.jpg')",
        'contact-info-area' : "url('/images/section_bg04.jpg')",
      },
      backgroundSize: {
        
      },
    },
  },
  plugins: [],
}

