"use strict";

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '900': '900ms'
      },
      fontFamily: {
        'caveat': ['"Caveat"', 'cursive'],
        'robotoSlab': ['"Roboto Slab"', 'serif']
      },
      scale: {
        '99': '.99'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};