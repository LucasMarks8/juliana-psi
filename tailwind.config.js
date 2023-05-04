/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#D30000'
        },
        pink: {
          50: '#ED9FCF'
        },
        gray: {
          50: '#A9A9A9'
        },
        blue: {
          50: '#94CDD3',
          100: '#4B5563'
        },
        ivory: {
          50: '#F4E7E7'
        },
        brown: {
          50: '#C3B9B9'
        }     
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
