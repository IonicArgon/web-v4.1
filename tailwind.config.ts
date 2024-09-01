import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f2f6d0',
        'dark-purple': '#27233a',
        thistle: '#c5c8e0',
        'rose-quartz': '#aaa1c8',
        'mountbatten-pink': '#967aa1',
      },
    },
  },
  plugins: [],
};
export default config;
