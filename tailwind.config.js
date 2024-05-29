/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'best-seller': "url(./img/best-seller.jpg)",
        'drink': "url(./img/drink.jpg)",
        'food': "url(./img/food.jpg)",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'primary': "#028391",
        'secondary': "#CDE8E5",
        'yellow': "#f5eb5e",
        'green': "#38bea1",
      },
    },
  },
  plugins: [],
}

