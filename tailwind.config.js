const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        writing: {
          from: { width: "100%" },
          to: { width: "0 " },
        },
      },
      animation: {
        gradient: "gradient 5s ease infinite",
        writing: "writing  3s steps(30) infinite alternate",
      },
      backgroundImage: {
        project1: "url('/images/project-1.webp')",
        project2: "url('/images/project-2.webp')",
        project3: "url('/images/project-3.webp')",
      },
    },
  },
  darkMode: "class",
};
