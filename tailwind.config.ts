import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'rufina': ['Rufina'],
        'satoshi': ['var(--font-satoshi)', 'sans-serif'],
      },
      colors: {
        green: {
          'primary' : '#3E5D43',
          'pastel' : '#F1F8EC',
          'subtitle' : '#849785',
          'text' : '#627243',
        },
        'almost-black' : '#0D1717',
        'almost-white' : '#EDEEE9',
        'background' : '#EDEEE9',
      },
    },
  },
  plugins: [],
}
export default config

