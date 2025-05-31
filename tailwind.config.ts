import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 3s linear infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      colors: {
        purple: {
          400: '#a855f7',
          500: '#9333ea',
          900: '#581c87',
        },
        yellow: {
          400: '#facc15',
        },
        red: {
          400: '#f87171',
        },
        green: {
          400: '#4ade80',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
