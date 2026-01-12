/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        background: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

