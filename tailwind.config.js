module.exports = {
  purge: {
    preserveHtmlElements: false,
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
        'step-end': 'step-end',
        'step-start': 'step-start',
      },
      margin: {
        '-68': '-17rem',
      },
      backgroundImage: theme => ({
        'header': "url('/src/assets/images/header.jpg')",
      }),
      transitionDuration: {
        '900': '900ms'
      },
      fontFamily: {
        'caveat': ['"Caveat"', 'cursive'],
        'robotoSlab': ['"Roboto Slab"', 'serif'],
        'head': ['"Alegreya Sans SC"', 'sans-serif'],
        'proHead': ['"Allerta Stencil"', 'sans-serif'],
        'sign': ['"Cookie"', 'cursive'],
        'desc': ['"Mukta"', 'sans-serif'],
        'name': ['"Paprika"', 'cursive'],
        'subtitle': ['"Acme"', 'sans-serif']
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
