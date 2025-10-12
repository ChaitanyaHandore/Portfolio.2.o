/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#b8b8b8",
        tertiary: "#1a1a1a",
        "black-100": "#111111",
        "black-200": "#0d0d0d",
        "white-100": "#f5f5f5",
        accent: "#3b82f6",
        "accent-dark": "#1d4ed8",
        "accent-light": "#60a5fa",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #3b82f6",
        "card-dark": "0px 35px 120px -15px #1d4ed8",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
