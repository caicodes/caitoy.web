/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--primary)",
        "brand-primary-focus": "var(--primary-focus)",
        "brand-primary-content": "var(--primary-content)",
        "brand-secondary": "var(--secondary)",
        "brand-secondary-focus": "var(--secondary-focus)",
        "brand-secondary-content": "var(--secondary-content)",
        "brand-accent": "var(--accent)",
        "brand-accent-content": "var(--accent-content)",
        "brand-neutral": "var(--neutral)",
        "brand-base-content": "var(--base-content)",
        "brand-base-100": "var(--base-100)",
        "brand-base-200": "var(--base-200)",
        "brand-base-300": "var(--base-300)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        artasce: {
          primary: "#4d0a5c",
          "primary-focus": "#5c0c6e",
          "primary-content": "#F2F3D9",
          secondary: "#ff7c0a",
          "secondary-focus": "#3C021C",
          "secondary-content": "#f5f5e0",
          accent: "#a1d6f7",
          "accent-focus": "#c7e6fa",
          "accent-content": "#0d5f96",
          neutral: "#1f0524",
          "base-content": "#F2F3D9",
          "base-100": "#060107",
          "base-200": "#1F0524",
          "base-300": "#2E0736",
        },
      },
    ],
  },
}
