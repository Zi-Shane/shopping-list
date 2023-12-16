import { useCallback, useState } from 'react';

// const { suggestions, fetchData } = useFetch(url)
export function useFetch(url: string): {
  suggestions: string[];
  fetchData: () => void;
} {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchData = useCallback(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => {
        console.error(err);
      });
  }, [url]);

  return { suggestions, fetchData };
}
