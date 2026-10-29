import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F1", cream: "#F3EDE0", paper: "#FFFEFB",
        sage: { DEFAULT: "#8A9A7B", light: "#DCE3D3", dark: "#52624A" },
        gold: { DEFAULT: "#B8975A", dark: "#85662B" },
        ink: "#363B31",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Great Vibes"', "cursive"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
        sway: { "0%,100%": { transform: "rotate(-1.5deg)" }, "50%": { transform: "rotate(1.5deg)" } },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: { rise: "rise .9s ease-out both", sway: "sway 7s ease-in-out infinite", fade: "fade .5s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
