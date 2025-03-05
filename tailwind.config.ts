import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#E6E6E9",
        container: "#d1d1d1",
        container_lighter: "#faf9f9",
        container_dark: "#1E1E1E",
        container_dark_lighter: "#333232",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [],
} satisfies Config;
