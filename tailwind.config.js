/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white_background_bobby: "#FFFCF9",
        white_accent_bobby: "#E9E6E4",
        gray_bobby: "#CACACA",
        black_bobby: "#121212",
        brown_bobby: "#63535B",
        purple_bobby: "#816C76"
      },
      fontFamily: {
        Playfair: ["Playfair Display"]
       }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/aspect-ratio")
  ],
}
