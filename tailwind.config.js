/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#141414",
        "Dark-grey": "#1F1F1F",
        "Neon-green": "#C4F82A",
        grey: "#333333",
      },
      fontFamily: {
        karla: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
