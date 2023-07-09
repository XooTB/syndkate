/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["Changa One", "cursive"],
        keania: ["Keania One", "cursive"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
    colors: {
      text: "#080226",
      background: "#ffffff",
      primary: "#f24e31",
      secondary: "#e2ddfd",
      accent: "#31f24e",
      transparent: "transparent",
    },
  },
  plugins: [],
};
