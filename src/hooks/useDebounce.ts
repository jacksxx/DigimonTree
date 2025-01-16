import { useCallback, useEffect, useState } from "react";

export function useDebounce<T>({
  value,
  delay = 300,
  callback,
}: {
  value: T;
  delay?: number;
  callback?: (debouncedValue: T) => void;
}): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const updateDebouncedValue = useCallback(() => {
    setDebouncedValue(value);
    if (callback) {
      callback(value);
    }
  }, [value, callback]);

  useEffect(() => {
    const handler = setTimeout(updateDebouncedValue, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [updateDebouncedValue, delay]);

  return debouncedValue;
}
