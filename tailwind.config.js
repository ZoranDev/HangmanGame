/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        37: "152px",
      },
      backgroundImage: {
        background: "url('/src/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
