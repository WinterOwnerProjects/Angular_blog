/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      height:{
        "test":"27rem",
        "55p":"55%",
        "45p":"45%"
      },
      colors:{
        "gray-blue":"#1E293B",
        "dark-blue":"#0F172A",
        "light-blue":"#11ACEA"
      }
    },
  },
  plugins: [],
}

