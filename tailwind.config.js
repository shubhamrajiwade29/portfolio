/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: { blue: '#2563EB', violet: '#7C3AED', pink: '#DB2777' },
        ink: '#14152A',
        muted: '#55586F',
        faint: '#8C8FA8',
        line: '#EBEBF4',
        soft: '#F7F7FC',
        tint: '#F8F7FE',
      },
      backgroundImage: {
        brand: 'linear-gradient(105deg,#2563EB,#7C3AED 55%,#DB2777)',
      },
    },
  },
  plugins: [],
}
