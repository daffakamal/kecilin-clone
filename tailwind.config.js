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
        'large': '1200px',
        '3xl': '1920px',
      },
      fontFamily: {
        PoppinsLight: ["PoppinsLight"],
        PoppinsRegular: ["PoppinsRegular"],
        PoppinsMedium: ["PoppinsMedium"],
        PoppinsSemi: ["PoppinsSemi"],
        PoppinsBold: ["PoppinsBold"],
        PoppinsSemiItalic: ["PoppinsSemiItalic"],
      },
      backgroundImage: {
        "bottom-banner": "url('../assets/Images/Home/home-bottom-banner.png')",
      },
      dropShadow: {
        "text-banner": "0 4px 4px rgb(0 0 0 / 40%)",
      },
    },
  },
  plugins: [],
};
