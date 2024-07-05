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
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        50: '#F1F6FF',
        100: '#C5D5FF',
        200: '#94ADFF',
        300: '#5C83FF',
        400: '#3061FF',
        500: '#0040FF',
        600: '#0032D6',
        700: '#00269E',
        800: '#001C6B',
        900: '#001133',
        950: '#000819',
      },
      accent: {
        50: '#FFF0F4',
        100: '#FFCCE2',
        200: '#FF99C5',
        300: '#FF66A1',
        400: '#FF3D7C',
        500: '#FF1A56',
        600: '#D6003E',
        700: '#A2002D',
        800: '#6E001F',
        900: '#3D0013',
        950: '#1F0009',
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
        DEFAULT: 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
      transitionDuration: {
        DEFAULT: '275ms',
      },
    },
  },
  plugins: [fluid],
};
export default config;
