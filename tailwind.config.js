const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: { min: "1025px" },
      laptop: { max: "1300px" },
      tablet: { max: "1024px" },
      mobile: { max: "720px" },
    },
    fontFamily: {
      sans: [
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: [
        "Georgia",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("supports-hover", "@media (hover: hover)");
    }),
  ],
};
