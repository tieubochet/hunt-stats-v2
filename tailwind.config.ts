import type { Config } from "tailwindcss";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./@/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // js files primarily because in dist
    "./node_modules/frames.js/dist/**/*.{ts,tsx,js,css}",
    "./node_modules/@frames.js/render/dist/*.{ts,tsx,js,css}",
    "./node_modules/@frames.js/render/dist/**/*.{ts,tsx,js,css}",

    // monorepo weirdness
    "../../node_modules/frames.js/dist/**/*.{ts,tsx,js,css}",
    "../../node_modules/@frames.js/render/dist/*.{ts,tsx,js,css}",
    "../../node_modules/@frames.js/render/dist/**/*.{ts,tsx,js,css}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
  },
} satisfies Config;

export default config;
