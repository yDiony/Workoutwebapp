import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        beVietnamMedium: "var(--font-be-vietnam-medium)",
        beVietnamSemiBold: "var(--font-be-vietnam)"
      },
      screens: {
        'tablet': {min: '568px', max: '1024px' },
        'custom': '1401px'
      },
    },
  },
  plugins: [],
} satisfies Config;
