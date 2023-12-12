import { useCallback, useEffect, useState } from 'react';

export function useTimeoutFetch(keyword: string): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // useEffect(() => {
  //   const interval = setTimeout(() => console.log(keyword), 1000);

  //   return () => clearInterval(interval);
  // }, [keyword]);

  const fetchData = useCallback(() => {
    console.log(keyword);
    if (keyword.length > 0) {
      fetch(`https://api.frontendeval.com/fake/food/${keyword}`)
        .then(res => res.json())
        .then(data => setSuggestions(data))
        .catch(err => {
          if (err.name === 'AbortError') return;
          console.error(err);
        });
    } else {
      setSuggestions([]);
    }
  }, [keyword]);

  useEffect(() => {
    const interval = setTimeout(fetchData, 500);
    return () => clearInterval(interval);
  }, [fetchData]);

  return suggestions;
}
