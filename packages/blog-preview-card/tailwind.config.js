/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        grey: ' hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)'
      },
      boxShadow: {
        card: '8px 8px 0px 0px hsl(0, 0%, 7%)' // x, y, blur, spread, color
      },
      maxWidth: {
        sm: '21rem',
        md: '27rem'
      }
    }
  },
  plugins: []
}
