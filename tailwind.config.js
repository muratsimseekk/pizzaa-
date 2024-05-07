/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        quattrocento: ["Quattrocento", "sans-serif"],
        satisfy: ["Satisfy", "sans-serif"],
      },
      colors: {
        sari: "#FDC913",
        acikGri: "#5F5F5F",
        koyuGri: "#292929",
        kirmizi: "#CE2829",
        bej: "#FAF7F2",
      },
    },
  },
  plugins: [],
};
