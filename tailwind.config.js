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
        gray: "#BBBBBB",
        "gray-light": "#F8F8F8",
        black: "#111111",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("postcss"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
