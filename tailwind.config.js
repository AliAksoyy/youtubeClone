/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        search: "#f0f0f0",
        hoverSearch: "#e4e4e4",
      },
    },
  },
  plugins: [],
};
