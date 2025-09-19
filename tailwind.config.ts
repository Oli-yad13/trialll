import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Birrama brand colors
        'birrama-blue': {
          50: '#E8F2F7',
          100: '#D1E5EF',
          200: '#A3CBE0',
          300: '#75B1D0',
          400: '#4797C0',
          500: '#3A6685', // Primary blue
          600: '#2E526A',
          700: '#294C60', // Darker blue
          800: '#1F3A47',
          900: '#15282E',
        },
        'birrama-gold': {
          50: '#FDF9F0',
          100: '#FBF3E1',
          200: '#F7E7C3',
          300: '#F3DBA5',
          400: '#EFCF87',
          500: '#EBC369',
          600: '#E7B74B',
          700: '#E3AB2D',
          800: '#DF9F0F',
          900: '#C88F0D',
        },
        // Golden gradient colors from the image
        'gradient-gold': {
          '100': '#A37E52',
          '200': '#AC8A5D',
          '300': '#C9B181',
          '400': '#DECE9B',
          '500': '#EBDFAB',
          '600': '#F0E6B1',
          '700': '#E7D8A3',
          '800': '#D1B57F',
          '900': '#C09962',
        }
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'birrama-gradient': 'linear-gradient(135deg, #A37E52 0%, #AC8A5D 9%, #C9B181 22%, #DECE9B 34%, #EBDFAB 44%, #F0E6B1 52%, #E7D8A3 64%, #D1B57F 85%, #C09962 100%)',
        'birrama-gradient-vertical': 'linear-gradient(180deg, #A37E52 0%, #AC8A5D 9%, #C9B181 22%, #DECE9B 34%, #EBDFAB 44%, #F0E6B1 52%, #E7D8A3 64%, #D1B57F 85%, #C09962 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
