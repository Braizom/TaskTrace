/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ttHeaderBg: '#FFF5F5',
        ttHeaderBtn: '#D9D9D9',
        ttHeaderText: '#000000'
      }
    }
  },
  plugins: []
}
