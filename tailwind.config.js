/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // 生产中tree-shaking
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // 手动支持切换模式，开启深色模式
};
