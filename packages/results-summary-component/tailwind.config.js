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
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',

        // Neutral
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',

        // Gradients
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',
        violetBlue: 'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)'
      },
      screens: {
        md: '715px',
        '2xl': '1440px'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      width: {
        100: '680px'
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)',
        scoreGradient:
          'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)',
        buttonGradient:
          'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)'
      }
    }
  },
  plugins: []
}
