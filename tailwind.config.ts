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
          primary: "#262630",
        },
        gray: {
          primary: "#949494",
          secondary: "#F5F5F5",
          tertiary: "#F8F8F8",
        },
        green: {
          primary: "#1E8E29",
          secondary: "#1e8e2933",
        },
        orange: {
          primary: "#FF4500",
          secondary: "#e1450033",
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
