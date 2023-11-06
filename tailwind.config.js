/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'gray-999': 'rgb(23 23 23)',
        'gray-800': 'rgb(38 38 38)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'reverse-spin' : 'reverse-spin 3s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee 40s linear infinite',
        'marquee3': 'marquee 35s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        },
        'marquee': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' },
        },
        'marquee2': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'marquee3': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
}

