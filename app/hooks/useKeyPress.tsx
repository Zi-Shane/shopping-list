import { useEffect } from 'react';

export function useKeyPress(key: string, callback: Function) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code == key) {
        callback();
      }
    };

    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [callback, key]);
}
