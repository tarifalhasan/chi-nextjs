import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero_bg.webp')",
      },
      colors: {
        skin: {
          primary: "#FFF500",
        },
      },
      fontFamily: {
        jet: "var(---jet)",
        neuemachina: "var(--neuemachina)",
        pixel: "var(--pixel)",
      },
    },
  },
  plugins: [],
};
export default config;
