/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        "primary-color": "#B98DFE",
        "primary-light-color": "#E6E6FA",
        "dark-purple": "#A36DEB"
      },
      screens: {
        "xs": "500px",
      }
    },
  },
  plugins: [],
}