/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      "cupcake"
    ],
  },
  theme: {
    extend: {
    fontFamily: {
      "Comfortaa":["Comfortaa", "cursive"],
      "fancy":["Merienda"]
    },
    
    },
  },
  plugins: [daisyui],
}

