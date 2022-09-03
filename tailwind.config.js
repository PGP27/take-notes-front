/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'modal-overlay': 'rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        decrease: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        down: {
          from: { transform: 'translateY(0)', opacity: 0 },
          to: { transform: 'translateY(1rem)', opacity: 1 },
        },
      },
      animation: {
        decrease: 'decrease 5s linear',
        down: 'down 0.5s 1 ease',
      },
    },
  },
  plugins: [],
};
