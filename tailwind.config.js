/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'best-seller': "url(./img/best-seller.jpg)"
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'primary': "#028391",
        'secondary': "#CDE8E5",
        'white2': "#fffff",
        'yellow': "#FFF56D"
      }
    },
  },
  plugins: [],
}

