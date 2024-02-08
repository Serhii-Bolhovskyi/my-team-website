// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    extend: {
      animation: {
        slideLeft: 'slideLeft 0.5s ease-out',
      },
      keyframes: {
        slideLeft: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        }
      },
      colors: {
        middleGreen: '#014E56',
        lightCoral: '#F67E7E',
        raptureBlue: '#79C8C7',
        policeBlue: '#2C6269',
        jungleGreen: '#004047',
        stateGreen: '#012F34',
        darkGreen: "#002529",
      },
      fontFamily: {
        sans: ['Livvic', 'sans-serif'],
      },
      top: {
        '26': '100px',
      }
    },
  },
  plugins: [],
}

// Livvic, sans-serif;