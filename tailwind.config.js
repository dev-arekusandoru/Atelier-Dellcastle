/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sl: "370px",

      sd: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "740px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      ...colors,
      offwhite: "#FFFBFC",
      offblack: "#010400",
      primary: "#30332E",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
