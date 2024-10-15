/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'background': '#1B1A3A',
        'card-background': '#232043',
        'exchange-background': '#3D3B58',
        'button': '#6A5ACD',
        'button-hover': '#836FFF',
        'button-primary': '#00BFA6',
        'button-primary-hover': '#009F89',
        'main-text': '#D3D1E3',
        'sub-text': '#9A99B2',
        'button-primary-text': '#1A1A2E'
      },
      fontFamily: {
        notoSansGeorgian: ['noto-sans-georgian', 'sans-serif']
      },
      fontSize: {
        'body-desktop': '1rem',
        'body-xl': '0.875rem',
        'body-mobile': '0.6rem'
      }
    }
  },
  plugins: [],
}

