import type { Config } from 'tailwindcss';
import fluid, { extract, fontSize } from 'fluid-tailwind';
import { FluidThemeConfig } from 'fluid-tailwind';

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    fontSize,
    screens: {
      xs: '20rem', // 320px
      sm: '30rem', // 480px
      md: '48rem', // 768px
      lg: '52rem', // 832px
      xl: '75rem', // 1200px
      xxl: '90rem', // 1440px
      fhd: '100rem', // 1600px
      qhd: '120rem', // 1920px
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1D1A05',
      white: '#FFFFFF',
      primary: {
        50: '#F0F2FF',
        100: '#D9DEFF',
        200: '#B8C4FF',
        300: '#8FA0FF',
        400: '#5D72FF',
        500: '#2541B2',
        600: '#1F3599',
        700: '#1A2A80',
        800: '#152066',
        900: '#10164D',
        950: '#0B0D33',
      },
      accent: {
        50: '#FEF2F0',
        100: '#FDE0DB',
        200: '#FBC1B5',
        300: '#F89A85',
        400: '#F46B52',
        500: '#CA3C25',
        600: '#B33520',
        700: '#9C2E1B',
        800: '#852716',
        900: '#6E2011',
        950: '#57190C',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    fluid: (({ theme }) => ({
      defaultScreens: [theme('screens.sm'), theme('screens.xxl')],
    })) satisfies FluidThemeConfig,
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.26, 0.52, 0.42, 0.94)',
      },
      transitionDuration: {
        DEFAULT: '275ms',
      },
    },
  },
  plugins: [fluid],
};
export default config;
