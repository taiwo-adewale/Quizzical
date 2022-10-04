/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#293264',
        btnPrimary: '#4D5B9E',
        btnText: '#F5F7FB',
        bgColor: '#F5F7FB',
      }
    },
  },
  plugins: [],
};