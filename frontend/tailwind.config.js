/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#090d16',
        panelBg: '#0f172a',
        cardBg: '#1e293b',
        cyanGlow: '#06b6d4',
        emeraldGlow: '#10b981',
        violetGlow: '#8b5cf6',
      }
    },
  },
  plugins: [],
}
