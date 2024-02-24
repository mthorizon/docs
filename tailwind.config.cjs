/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        ['inter']: 'Inter',
        ['roboto']: 'Roboto Mono',
      },
      screens: {
        md: '848px',
      },
    },
  },
  plugins: [],
}
