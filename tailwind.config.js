/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["Changa One", "cursive"],
        keania: ["Keania One", "cursive"],
        noto: ["Noto Sans", "sans-serif"],
        expletus: ["Expletus Sans", "cursive"],
        inika: ["Inika", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    colors: {
      text: "#080226",
      background: "#ffffff",
      primary: "#f24e31",
      secondary: "#e2ddfd",
      accent: "#31f24e",
      transparent: "transparent",
      text1: "#fdf8f2",
      background1: "#040301",
      primary1: "#3d87e1",
      secondary1: "#0d0a42",
      accent1: "#38d8e0",
    },
  },
  plugins: [],
};
