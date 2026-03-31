import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Use CSS variables for theme-aware colors
        "primary": "var(--primary)",
        "primary-container": "var(--primary-container)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "surface": "var(--surface)",
        "surface-dim": "var(--surface-dim)",
        "surface-bright": "var(--surface-bright)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container-high": "var(--surface-container-high)",
        "surface-container-highest": "var(--surface-container-highest)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        "on-background": "var(--on-background)",
        "background": "var(--background)",
        "outline": "var(--outline)",
        "outline-variant": "var(--outline-variant)",
        "error": "var(--error)",
        // Static colors
        "secondary": "#bbc6e8",
        "tertiary": "#c0c6d9",
        "inverse-surface": "#e3e2e2",
        "inverse-on-surface": "#303031",
        "inverse-primary": "#8a5100",
        "surface-tint": "#ffb86e",
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
        label: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
