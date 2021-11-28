module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2,minmax(0,1fr))',
        '3': 'repeat(3,minmax(0,1fr))',
        '5': 'repeat(5,minmax(0,1fr))',
      },
      flex: {
        '300px': '300px'
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'spartan': ['Spartan'],
        'montserrat': ['Montserrat']
      },
      fontSize: {
        'xxxl': '200px'
      },
      colors: {
        primary: '#FF8A48',
        secondary: '#FFF0E8',
        tertiary: '#FF5621',
        black: '#000000',
        transparent: '#00000000',
        blue: {
          dark: '#455880'
        },
        grey:  {
          dark: '#545151',
          light: '#878787',
          light2: '#F6F6F6'
        }
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      width: {
        '20': '20px',
        '30': '30px',
        '200': '200px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        'screen-10': '10vw',
        'screen-20': '20vw',
        'screen-30': '30vw',
        'screen-40': '40vw',
        'screen-50': '50vw',
        'screen-60': '60vw',
        'screen-70': '70vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
      },
      height : {
        '90%': '90%',
        '100': '100px',
        '180': '180px',
        '200': '200px',
        '400': '400px',
        '500': '500px',
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
        'screen-150': '150vh',
        'screen-2x': '200vh',
        'screen-3x': '300vh',
        'screen-4x': '400vh'
      },
      maxWidth: {
        '120': '120%'
      },
      minWidth: {
        '15': '15rem',
        '20': '20rem',
        '30': '30rem',
        '40': '40rem',
        '50': '50rem',
        '60': '60rem'
      },
      top: {
        '4/5': '45%'
      },
      inset: {
        '4/5': '45%'
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropGrayscale: {
        50: '.5',
      },
      grayscale: {
        80: '80%',
      },
      backgroundImage: {
        'our-mission': "url('/src/assets/image/png/9.png')",
        'boxes': "url('/src/assets/image/png/20.png')"
      },
      backgroundSize: {
        '150px': '150px'
      },
      backgroundPosition: {
        'left-bottom-1': 'left 1rem bottom 1rem',
      },
      transitionTimingFunction: {
        'ease-in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)'
      }
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      width: ['hover','group-hover'],
      transitionProperty: ['hover', 'focus'],
      ringColor: ['hover','active','focus'],
      ringOpacity: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
}
