/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/componentes/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        azulPrincipal: '#3589b2'
      }
    }
  },
  plugins: []
}
