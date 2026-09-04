/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00f0ff',
        neonPurple: '#b026ff',
        darkBg: '#0a0a0f',
        glassBg: 'rgba(20, 20, 30, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' },
          '100%': { boxShadow: '0 0 20px #b026ff, 0 0 40px #b026ff' },
        }
      }
    },
  },
  plugins: [],
}
