import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "system-ui", "-apple-system", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        // Primary Brand Colors (Core Identity)
        navy: {
          light: '#4A5EBF',
          DEFAULT: '#002B7F',
          dark: '#001A5C',
        },
        // Secondary Colors (Olympic Ring Colors)
        brand: {
          red: '#D71920',
          green: '#007A3D', 
          yellow: '#FFD100',
          blue: '#00AEEF',
        },
        // Supporting Neutral Tones
        gray: {
          50: '#F5F5F5',
          200: '#CCCCCC',
          800: '#333333',
        },
        // Legacy mappings
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};
export default config;
