/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "davys-grey": "#4D4D4D",
        "vermillion": "#CD4631",
        "champagne": "#F7EDE8",
        "alice-blue": "#EDF3F7",
        "pewter-blue": "#81ADC8",
      },
      boxShadow: {
      "blog": "10px 10px 0px #000"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      
    },
  },
  plugins: [],
}