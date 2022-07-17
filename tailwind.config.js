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
      dark: "#222",
      player: "#1B1B1B",
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: "#f7931a",
    },
    extend: {},
  },
  plugins: [],
};
