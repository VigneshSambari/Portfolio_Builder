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
        serif: ['PT Serif'],
        opensans: ['Open Sans'],
        nunito: ['Nunito Sans'],
        poppins: ['Poppins'],
        inter: ['Inter'],
        andika: ['Andika']
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