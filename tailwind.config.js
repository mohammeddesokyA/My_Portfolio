/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // الكود ده عشان لمعة الزرار تشتغل
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        }
      },
      animation: {
        shine: 'shine 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}