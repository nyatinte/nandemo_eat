import daisyui from "daisyui";
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "without-header": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
