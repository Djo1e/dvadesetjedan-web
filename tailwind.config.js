const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./out/index.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      stone: "#1c1917",
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: "#f2a900",
    },
    extend: {},
  },
  plugins: [],
};
