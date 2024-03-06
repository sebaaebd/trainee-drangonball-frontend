/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bodyView: '#353535',
      bodyTarjeta: '#D35600',
      bodyTarjetaHover: '#FF781C',
      botonSearch: '#0003E5',
      botonSearchHover: '#0003FF',
      placeHolderText: '#FFFFFF',
      search: '#1517FF'
    }
  },
  plugins: [],
}

