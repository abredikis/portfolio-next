import type { Config } from "tailwindcss";
import fluid, { extract, fontSize } from "fluid-tailwind";
import { FluidThemeConfig } from "fluid-tailwind";
import typography from "@tailwindcss/typography";
import type { ResolvableTo } from "tailwindcss/types/config";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    fontSize,
    screens: {
      xs: "20rem", // 320px
      sm: "30rem", // 480px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "75rem", // 1200px
      xxl: "90rem", // 1440px
      fhd: "100rem", // 1600px
      qhd: "120rem", // 1920px
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      primary: {
        50: "#F5F8FF",
        100: "#DBE6FF",
        200: "#A8C2FF",
        300: "#709BFF",
        400: "#3D77FF",
        500: "#0A54FF",
        600: "#0040D6",
        700: "#002F9E",
        800: "#00206B",
        900: "#000F33",
        950: "#000819",
      },
      accent: {
        50: "#FFF5F8",
        100: "#FFDBE6",
        200: "#FFA8C2",
        300: "#FF709B",
        400: "#FF3D77",
        500: "#FF0A54",
        600: "#D60040",
        700: "#9E002F",
        800: "#6B0020",
        900: "#33000F",
        950: "#190008",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    fluid: (({ theme }) => ({
      defaultScreens: [theme("screens.sm"), theme("screens.xxl")],
    })) satisfies FluidThemeConfig,
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.79,0.14,0.15,0.86);",
    },
    transitionDuration: {
      DEFAULT: "250ms",
    },
    extend: {
      typography: (({ theme }) => ({
        DEFAULT: {
          css: {
            "h1,h2,h3,h4,h5,h6": {
              "@apply mb-[0.3em]": {},
              "& + p, & + ul, & + ol": {
                "@apply mt-0": {},
              },
            },
            "p,ul,ol": {
              "@apply max-w-prose": {},
              "@apply my-[1.5em]": {},
            },
          },
        },
      })) satisfies ResolvableTo<Record<string, unknown>>,
    },
  },
  plugins: [fluid, typography],
};
export default config;
