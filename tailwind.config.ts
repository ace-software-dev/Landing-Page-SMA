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
        'contact-info': "url('/images/contact-info.png')",
      },
      fontFamily: {
        'rufina': ['Rufina'],
        'satoshi': ['var(--font-satoshi)', 'sans-serif'],
      },
      colors: {
        green: {
          'primary' : '#3E5D43',
          'pastel' : '#F1F8EC',
          'pastel2' : '#D5DDD7',
          'subtitle' : '#849785',
          'text' : '#627243',
        },
        'almost-black' : '#0D1717',
        'almost-black-40' : '#0D171766',
        'subtitle' : '#111212',
        'almost-white' : '#FDFDFD',
        'header' : '#EDEEE9',
        'general' : '#111212',
        'placeholder': '#C4CFC6',
        'footer' : '#849785'
      },
      screens: {
        'xs': '425px',
      },
    },
  },
  plugins: [],
}
export default config
