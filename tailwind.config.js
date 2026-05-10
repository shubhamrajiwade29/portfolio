/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#C9A84C',
          500: '#B8902A',
          600: '#9A7820',
        },
        parchment: {
          50: '#FAF8F5',
          100: '#F4F0EA',
          200: '#EDE8DF',
          300: '#DDD5C8',
          400: '#C9BCA9',
        },
        slate: {
          900: '#1C1917',
          800: '#292524',
          700: '#44403C',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
        },
        // keep backward compat aliases
        amber: { 400: '#C9A84C', 500: '#B8902A' },
        ink: { 950: '#FAF8F5', 900: '#F4F0EA', 800: '#EDE8DF', 700: '#DDD5C8', 600: '#C9BCA9', 500: '#A8A29E' },
        ghost: { 100: '#1C1917', 200: '#292524', 400: '#57534E', 600: '#78716C' },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'blink': 'blink 1.2s step-end infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideRight: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
