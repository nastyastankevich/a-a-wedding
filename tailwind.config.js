/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'old-standard': ['Old Standard', 'serif'],
      euphoria: ['Euphoria Script', 'serif'],
      'great-vibes': ['Great Vibes', 'serif'],
    },
    maxWidth: {
      desktop: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
