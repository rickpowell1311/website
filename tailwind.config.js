/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 100 },
          '50%': { opacity: 0 },
        },
        pop: {
          '0%': { opacity: 0, transform: 'scale(0.5, 0.5)' },
          '100%': {opacity: 1, transform: 'scale(1, 1)' }
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pop: 'pop 0.5s cubic-bezier(.26, .53, .74, 1.1)'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      return matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}

