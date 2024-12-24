import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'rainbow-outline': {
          '0%': { 'outline-color': '#ff0066' },
          '16.67%': { 'outline-color': '#ff6600' },
          '33.33%': { 'outline-color': '#ffcc00' },
          '50%': { 'outline-color': '#33cc00' },
          '66.67%': { 'outline-color': '#0066ff' },
          '83.33%': { 'outline-color': '#6600ff' },
          '100%': { 'outline-color': '#ff0066' },
        },
      },
      animation: {
        'rainbow-outline': 'rainbow-outline 2s linear infinite',
      },
      colors: {
        cream: '#f2f6d0',
        'dark-purple': '#27233a',
        thistle: '#c5c8e0',
        'rose-quartz': '#aaa1c8',
        'mountbatten-pink': '#967aa1',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
