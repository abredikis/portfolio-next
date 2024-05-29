import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

export default function useDebounce<T>(value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(function () {
      setDebounceValue(value);
    }, delay);

    return clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
}
