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
        // Primary
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',

        // Neutral
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      },
      screens: {
        md: '376px',
        '2xl': '1440px'
      },
      borderRadius: {
        '3xl': '1.25rem'
      },
      boxShadow: {
        card: '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
        orderButton: '0px 20px 20px 0px rgba(56, 42, 225, 0.19)'
      },
      backgroundImage: {
        backgroundMobile: "url('/images/pattern-background-mobile.svg')",
        backgroundDesktop: "url('/images/pattern-background-desktop.svg')"
      }
    }
  },
  plugins: []
}
