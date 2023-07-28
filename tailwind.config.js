/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000",
        danger: "#EF4444",
        primary: "#0C579B",
        secondary: "#23B574",
        state: "#2F80ED",
        gray: "#D8E1E8",
        lightGray: "#eff4fa",
      },
    },
  },
  plugins: [],
};
