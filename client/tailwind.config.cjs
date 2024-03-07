/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bodyView: '#353535',
      bodyTarjeta: '#DF6714',
      bodyTarjetaHover: '#FF7F28',
      botonSearch: '#0003E5',
      botonSearchHover: '#0003FF',
      placeHolderText: '#FFFFFF',
      search: '#1517FF'
    }
  },
  plugins: [],
}

