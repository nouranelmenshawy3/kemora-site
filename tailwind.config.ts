import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing brand identity is preserved.
        primary: '#0F1923',
        accent: {
          DEFAULT: '#C4622D',
          dark: '#A34F22',
          light: '#D4764A',
        },
        sand: {
          DEFAULT: '#F5F1EB',
          dark: '#EAE4D9',
        },
        // Warm neutral additions introduced by the redesign.
        offwhite: '#FBFAF7',
        olive: {
          DEFAULT: '#6B6F4E',
          dark: '#565A3D',
          light: '#8A8E69',
        },
        'k-muted': '#6B6460',
        'k-border': '#E2DDD6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
