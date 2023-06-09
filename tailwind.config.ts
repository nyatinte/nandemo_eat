import daisyui from "daisyui";
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "without-header": "calc(100vh - 80px)",
      },
      maxHeight: {
        "without-header": "calc(100vh - 80px)",
      },
      minHeight: {
        "without-header": "calc(100vh - 80px)",
      },
      colors: {
        bg: "#FFF7ED",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fef08a",
          secondary: "#bef264",
          accent: "#67e8f9",
          neutral: "#f5f2eb",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          twitter: "#1DA1F2",
        },
      },
    ],
  },
} satisfies Config;
