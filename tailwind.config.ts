import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  plugins: [
    require('tailwindcss-logical'),
    require('./src/@core/tailwind/plugin'),
  ],
  theme: {
    extend: {},
  },
};
export default config;
