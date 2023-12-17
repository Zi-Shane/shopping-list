import { useCallback, useEffect, useState } from 'react';
import { getSuggestions } from 'API';

export function useDebounce(keyword: string): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchData = useCallback(() => {
    if (keyword.length > 0) {
      getSuggestions(keyword).then(data => setSuggestions(data));
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
