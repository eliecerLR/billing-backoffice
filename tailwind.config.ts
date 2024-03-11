import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/home/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "original-cyan": "#C5FFF8",
      "monoc-cyan": {
        100: "#b8ffff",
        200: "#a9ffff",
        300: "#9afcf9",
        400: "#8bedea",
        500: "#7cdedb",
        600: "#6dd0cd",
        700: "#5fc1bf",
        800: "#5FC1BF",
      },
      "original-sky": "#96EFFF",
      "original-blue": "#5FBDFF",
      "original-purple": "#7b66ff",
      "original-gray": "#D3D3D3",
      "original-bone": "#F6F6F6",
      "original-dark-blue": "#001C2E",
      "input-error": "#E75A5A",
    },
    extend: {
      fontFamily: {
        custom: ["Afacad"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
