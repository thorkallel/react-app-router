/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#084887",
        secondary: "#f58a07",
        tertiary: "#909cc2",
        quaternary: "#f9ab55",
        quinary: "#f7f5fb",
        white: "#ffffff",
        black: "#000000",
        gray: "#808080",
        lightGray: "#d3d3d3",
        darkGray: "#a9a9a9",
        veryDarkGray: "#808080",
        veryLightGray: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
