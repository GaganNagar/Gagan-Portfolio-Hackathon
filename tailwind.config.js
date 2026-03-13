/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Yeh class-based dark mode enable karega
  theme: {
    extend: {
      colors: {
        'blue-700': '#1D4ED8',
        'violet-900': '#4C1D95',
        'neon-400': '#A78BFA', 
        'neon-500': '#8B5CF6', 
        'neon-600': '#7C3AED',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}