export function getSuggestions(keyword: string): Promise<string[]> {
  return (
    fetch(`https://api.frontendeval.com/fake/food/${keyword}`)
      .then(res => res.json())
      // .then(data => data)
      .catch(err => {
        if (err.name === 'AbortError') return;
        console.error(err);
      })
  );
}
