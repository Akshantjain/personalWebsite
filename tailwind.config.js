module.exports = {
  purge: {
    preserveHtmlElements: false,
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
        'proHead': ['"Allerta"', 'sans-serif'],
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
      keyframes: {
        'fade-slide-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-5%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)',
          },
        },
        'fade-slide-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(5%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)',
          },
        },
        'fade-slide-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(75%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          }
        },
        'fade-slide-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-75%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          }
        },
      },
      animation: {
        fadeSlideInLeft: 'fade-slide-in-left 1s ease-in-out forwards',
        fadeSlideInRight: 'fade-slide-in-right 1s ease-in-out forwards',
        fadeSlideInUp: 'fade-slide-in-up 1s ease-in-out forwards',
        fadeSlideInDown: 'fade-slide-in-down 1s ease-in-out forwards'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
