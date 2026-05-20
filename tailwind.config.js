export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#3b82f6",
        primaryHover: "#2563eb",

        background: "#0b1220",
        surface: "#1e293b",

        textPrimary: "#ffffff",
        textSecondary: "#94a3b8",

        border: "#334155",
      },
    },
  },

  plugins: [],
}