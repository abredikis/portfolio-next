import { useEffect, useRef, useState } from 'react';

export default function useScrollPosition() {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const rafRef = useRef<number>();
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const updateScrollTop = () => {
      const currentScrollTop = document.documentElement.scrollTop;

      if (currentScrollTop !== lastScrollTop.current) {
        lastScrollTop.current = currentScrollTop;
        setScrollTop(currentScrollTop);
      }
    };

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        updateScrollTop();
        rafRef.current = undefined;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    updateScrollTop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return scrollTop;
}
