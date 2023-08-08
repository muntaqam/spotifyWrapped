/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'spotify-bg': '#18181b',
      },
      fontFamily: {
        'spotify': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

