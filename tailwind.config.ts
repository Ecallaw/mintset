import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  
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
      colors: {
        onNeutralBg: 'var(--onNeutralBg)',
        // onNeutralBg: 'rgb(var(--color-primary) / <alpha-value>)',

        neutralBg: 'var(--neutralBg)',
        surfaceBg: 'var(--surfaceBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary: 'var(--primary)',
        mintset : {
          50 : '#ffee2b',
          100 : '#aecb45',
          200 : '#51ad32',
          300 : '#009377',
        },
      },
      spacing: {
        'toolbarHeight': '84px',
        'toolbarHeight-1': '126px',
        'toolbarHeight-2': '168px',
      }
    },
   
  },
  plugins: [],
}
export default config
