import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          main: "#262630",
        },
        gray: {
          main: "#949494",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        mani: ["var(--font-mani)"],
        vazir: ["var(--font-vazir)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
