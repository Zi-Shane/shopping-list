import { useEffect, useState } from 'react';

export function useFetch(keyword: string): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    if (keyword.length > 0) {
      fetch(`https://api.frontendeval.com/fake/food/${keyword}`, {
        signal: controller.signal,
      })
        .then(res => res.json())
        .then(data => setSuggestions(data))
        .catch(err => {
          if (err.name === 'AbortError') return;
          console.error(err);
        });
    } else {
      setSuggestions([]);
    }

    return () => controller.abort();
  }, [keyword]);

  return suggestions;
}
