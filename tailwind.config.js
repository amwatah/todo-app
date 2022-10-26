/** @type {import('tailwindcss').Config} */
const withAnimated = require("animated-tailwindcss");
module.exports = withAnimated({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mantinePrimary: "var(--mantine-color-blue-7)",
      },
    },
  },
  plugins: [],
});
