/* eslint-disable no-undef */

const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        orange: "#ee4d2d",
        red1: "#f53d2d",
        orange1: "#f63",
      },
    },
  },
  // plugins: [require('@tailwindcss/line-clamp')]
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.7xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
        },
      });
    }),
    require("@tailwindcss/line-clamp"),
  ],
};
