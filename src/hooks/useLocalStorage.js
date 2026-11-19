import { useEffect, useState } from 'react';

/**
 * useState persisted to localStorage.
 * Falls back gracefully when storage is unavailable or contains invalid JSON.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or blocked — the app still works in memory.
    }
  }, [key, value]);

  return [value, setValue];
}
