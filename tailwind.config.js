/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeOpacity: "rgba(245, 214, 152, 0.3)",
        orange: "rgba(245, 214, 152, 1)",
        blackOpacity: "rgba(0, 0, 0, 0.6)",
        swapBg: "rgba(23,23,23,0.88)",
        disable: '#626262',
        selectBg: '#322E26'
      },
    },
  },
  plugins: [],
};
