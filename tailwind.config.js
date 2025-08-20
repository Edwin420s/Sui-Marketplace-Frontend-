/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sui-blue': '#00AEEF',
        'sui-navy': '#0A192F',
        'sui-light-navy': '#112240',
        'sui-lightest-navy': '#233554',
        'sui-slate': '#8892b0',
        'sui-light-slate': '#a8b2d1',
        'sui-lightest-slate': '#ccd6f6',
      }
    },
  },
  plugins: [],
}