/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
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
        hbo: {
          primary: "#9e86ff",
          "primary-focus": "#a991f7",
          "primary-content": "#ffffff",
          secondary: "#b535f6",
          "secondary-focus": "#c800ff",
          "secondary-content": "#ffffff",
          accent: "#7e22ce",
          "accent-focus": "#7b2abf",
          "accent-content": "#ff00e5",
          neutral: "#480cb0",
          "base-content": "#ffffff",
          "base-100": "#030326",
          "base-300": "#0e0538",
        },
      },
    ],
  },
};
