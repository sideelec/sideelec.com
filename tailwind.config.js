const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["content/**/*.{md,yml,json,json5,csv}"],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
