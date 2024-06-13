/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#5B0017",
        'primary2': "#CC9D2F",
        'primary3' : '#243054'
      },
      fontFamily: {
        'intel': ["Inter", "sans-serif"],
        'Courgette' : ["Courgette", 'cursive']
      },
    },
  },
  plugins: [],
};
