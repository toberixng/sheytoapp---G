// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Example custom color
        secondary: '#50E3C2',
        accent: '#F5A623',
      },
    },
  },
  plugins: [],
};

export default config;