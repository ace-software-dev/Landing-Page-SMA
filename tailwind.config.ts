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
      },
      colors: {
        green: {
          '800': '#3E5D43',
        },
        'almost-black' : '#0D1717',
        'almost-white' : '#EDEEE9',
        'background' : '#EDEEE9',
        'pastel-green' : '#F1F8EC',
        'primary-green' : '#3E5D43',
        'green-subtitle' : '#849785',
        'green-text' : '#627243',
      },
    },
  },
  plugins: [],
}
export default config
