/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#35e9da",
        danger: "#ef4444",
        warning: "#f59e0b",
        success: "#22c55e",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827",
        muted: "#6b7280",
      }
    },
  },
  plugins: [],
}

