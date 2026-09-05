/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream: '#F4EAD9',
        sand: '#ECE1C6',
        maroon: {
          DEFAULT: '#6B2A20',
          dark: '#3D160F',
        },
        nearblack: '#241A12',
        gold: {
          DEFAULT: '#B9863A',
          light: '#D9AE6C',
        },
        teal: '#204A45',
        ink: {
          DEFAULT: '#2A2015',
          soft: '#5E5140',
        },
        line: 'rgba(42,32,21,0.16)',
      },
      maxWidth: {
        site: '1120px',
      },
    },
  },
  plugins: [],
};
