/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: '#0D192C',
        darkBlue: '#15263F',
        darkGrey: '#2E405A',
        cyan: '#00FFF8',
        softBlue: '#8BACD9',
      },
    },
  },
  plugins: [],
}
