/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': '780px',
      '2xl': '1440px'
    },
    fontFamily: {
      oswold: ['Oswold', 'sans-serif'],
      oswoldd: ['Oswold'],
    },
    colors: {
      'red': '#E3000E',
      'black': '#222222',
      'white': '#FFFFFF',
      'gray': '#FAFAFA'
    },
    fontSize:{
      'large-h2':['14rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
        
      }],
      'md-h2':['8rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'sm-h2':['28px',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'large-h3':['4.3rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'md-h3':['4rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'sm-h3':['3.5rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'large-h5':['2.22rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'md-h5':['2rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'sm-h5':['1.8rem',{
        fontWeight : '500',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'large-p':['2rem',{
        fontWeight : '300',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'md-p':['1.8rem',{
        fontWeight : '300',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
      'sm-p':['1.6rem',{
        fontWeight : '300',
        lineHeight : '1.3',
        letterSpacing: '0',
      }],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          },
        }
      })
    }
  ],
}