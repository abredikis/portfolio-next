import breakpoints from './breakpoints';

export default function getMediaQuery(breakpoint: keyof typeof breakpoints) {
  return `(min-width: ${breakpoints[breakpoint]})`;
}
