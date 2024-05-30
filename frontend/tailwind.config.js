/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['Amatic SC', 'cursive'],
      },

      colors: {
        'f99dc6': '#f99dc6',
        'f2f2f2': '#f2f2f2',
        'a4dadc': '#a4dadc',
      },
    },
  },
  plugins: [],
};
