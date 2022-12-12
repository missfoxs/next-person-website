/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"], // 生产中tree-shaking
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], // v3升级为content
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // 手动支持切换模式，开启深色模式
};
