import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [position, setPosition] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const scrollTop = document.documentElement.scrollTop;

      setPosition(scrollTop);
    };

    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return position;
}
