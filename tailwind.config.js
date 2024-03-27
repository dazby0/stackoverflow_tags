/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#038C8C",
        secondary: "#0b1726",
      },
    },
  },
  plugins: [],
};
