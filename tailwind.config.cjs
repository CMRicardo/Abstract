/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#4C5FD5",
        headerBg: "#dadbf1",
        background: "#fff",
      },
      fontFamily: {
        sans: "America",
        bold: "America-bold",
      },
    },
  },
  plugins: [],
};
