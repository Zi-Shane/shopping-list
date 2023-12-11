import { useEffect, useState } from 'react';

export type SuggestionsData = {
  suggestions: string[];
  loading: boolean;
  error: string;
};

export function useSuggestions(url: string, keyword: string): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    if (keyword.length > 0) {
      fetch(url + keyword, {
        signal: controller.signal,
      })
        .then(res => res.json())
        .then(data => setSuggestions(data))
        .catch(err => console.error(err));
    } else {
      setSuggestions([]);
    }

    return () => controller.abort();
  }, [keyword, url]);

  return suggestions;
}
