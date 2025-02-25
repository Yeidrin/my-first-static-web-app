/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'pink': '#D6A8C2',
      },
      fontFamily: {
        'century-gothic': ["century-gothic", "sans-serif"],
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
