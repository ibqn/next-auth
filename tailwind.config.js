/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        540: '540px',
      },
      boxShadow: {
        form: '0 15px 35px 0 rgba(60,66,87,.08), 0 5px 15px 0 rgba(0,0,0,.12)',
        'input-focus': '0 0 0 2px #F472B6',
      },
    },
  },
  plugins: [],
}
