/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#5b21b6',
        accent2: '#3730a3',
        bgDark: '#0b1220',
        panel: '#0f172a'
      }
    },
  },
  plugins: [],
}
