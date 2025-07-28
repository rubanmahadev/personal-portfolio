/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
         screens: {
        '2k': '1920px',
        '4k': '2560px',
      },
    },
  },
  plugins: [],
};
