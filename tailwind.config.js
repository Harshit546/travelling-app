/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gsans: ['"Google Sans Code"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        osans: ["Open Sans", "sans-serif"],
        jsans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#4475F2",
        secondary: "#FF6B6B",
        dark: "#181818",
      },
    },
  },
  plugins: [],
};
