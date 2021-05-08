module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '900': '900ms'
      },
      fontFamily: {
        'caveat': ['"Caveat"', 'cursive'],
        'robotoSlab': ['"Roboto Slab"', 'serif'],
        'lato': ['"Lato"', 'sans-serif'],
        'head': ['"Alegreya Sans SC"', 'sans-serif'],
        'proHead': ['"Allerta Stencil"', 'sans-serif'],
        'sign': ['"Cookie"', 'cursive'],
        'desc': ['"Mukta"', 'sans-serif']
      },
      scale: {
        '99': '.99'
      },
      minHeight: {
        '60': '55rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
