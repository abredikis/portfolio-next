import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
export default function smoothScrollTo(selector: string) {
  gsap.to(window, {
    duration: 1.25,
    scrollTo: { y: selector, offsetY: 150 },
    ease: 'expo.inOut',
  });
}
