/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5D5FF4",
        orange: {
          100: "#ffe2df",
          200: "#ffc5c0",
          300: "#ffa9a0",
          400: "#ff8c81",
          500: "#ff6f61",
          600: "#cc594e",
          700: "#99433a",
          800: "#662c27",
          900: "#331613",
        },
        green: "#13ce66",
        // gray: "#BBBBBB",
        gray: {
          100: "#F8F8F8",
          200: "#e4e4e4",
          300: "#d6d6d6",
          400: "#c9c9c9",
          500: "#bbbbbb",
          600: "#969696",
          700: "#707070",
          800: "#4b4b4b",
          900: "#252525",
        },
        black: "#111111",
      },
    },
    zIndex: {
      "-1": "-1",
    },
    borderWidth: {
      1: "1px",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("postcss"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
