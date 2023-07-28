/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000",
        danger: "#EB5757",
        gray: "#CED5DA",
        primary: "#EFF4FA",
        secondary: "#23B574",
      },
    },
  },
  plugins: [],
};
