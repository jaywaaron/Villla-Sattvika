import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - deep Balinese forest/rice field greens
        forest: {
          DEFAULT: "#2D4A35",
          light: "#3D6B4A",
          dark: "#1E3324",
        },
        sage: {
          DEFAULT: "#5A8B67",
          light: "#7AAB86",
          pale: "#C8DDD0",
        },
        // Accent - warm terracotta/stone/earth
        terracotta: {
          DEFAULT: "#B8956A",
          light: "#D4B896",
          pale: "#EDE0D0",
        },
        // Pool / water teal
        pool: {
          DEFAULT: "#6BBFB8",
          deep: "#4A9A92",
        },
        // Timber / teak warm brown
        timber: "#8B5E3C",
        // Backgrounds
        cream: {
          DEFAULT: "#FAF8F4",
          warm: "#F2EDE5",
          deep: "#E8DDD0",
        },
        // Dark text
        charcoal: {
          DEFAULT: "#3A3530",
          light: "#6B645D",
          dark: "#1A1F1B",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
