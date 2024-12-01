import { useEffect, useState } from 'react';
import useDebounce from "./useDebounce";

const DEBOUNCE_DELAY_MS = 10;

export default function useScrollPosition() {
  const [position, setPosition] = useState<number>(0);

  const debouncedPosition = useDebounce(position, DEBOUNCE_DELAY_MS);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return debouncedPosition;
}