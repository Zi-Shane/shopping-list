import { useCallback, useEffect, useRef } from 'react';

// const {reset, clear} = useTimeout(callback, delay)
export function useTimeout(
  callback: () => void,
  delay: number,
): { reset: () => void; clear: () => void } {
  const timeroutRef = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef(callback);

  // update callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeroutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    clearTimeout(timeroutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  // auto start when initial
  useEffect(() => {
    set();
    return clear;
  }, [delay, clear, set]);

  return { reset, clear };
}
