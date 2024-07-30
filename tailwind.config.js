/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
