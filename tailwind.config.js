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
      keyframes: {
        showBodyPart: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        showBodyPart: "showBodyPart 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
