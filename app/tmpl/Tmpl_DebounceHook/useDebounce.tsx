import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

// useDebunce(callback, delay, keyword)
export function useDebounce(
  callback: () => void,
  delay: number,
  keyword: string,
) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(() => reset(), [keyword, reset]);
  // clear the initial fetch
  useEffect(() => clear(), [clear]);
}
