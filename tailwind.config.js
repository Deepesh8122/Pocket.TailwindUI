/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'reverse-spin' : 'reverse-spin 3s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
}

