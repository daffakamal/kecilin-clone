/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '449px',
        '3xl': '1920px',
      },
      fontFamily: {
        PoppinsLight: ["PoppinsLight"],
        PoppinsRegular: ["PoppinsRegular"],
        PoppinsMedium: ["PoppinsMedium"],
        PoppinsSemi: ["PoppinsSemi"],
        PoppinsBold: ["PoppinsBold"],
        PoppinsSemiItalic: ["PoppinsSemiItalic"]
      },
    },
  },
  plugins: [],
}
