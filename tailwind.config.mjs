/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#03045E',
        secondary: '#0077B6',
        accent: '#00B4D8',
        light: '#90E0EF',
        light2: '#CAF0F8'
      }
    }
  },
  plugins: []
}
