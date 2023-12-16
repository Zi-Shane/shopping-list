import { useState } from 'react';
import { useFetch } from './useFetch';
import { useDebounce } from './useDebounce';

export function Tmpl_DebounceHook() {
  const [keyword, setKeyword] = useState('be');
  const { suggestions, fetchData } = useFetch(
    `https://api.frontendeval.com/fake/food/${keyword}`,
  );
  useDebounce(() => fetchData(), 500, keyword);

  return (
    <div>
      <div>
        {suggestions.map((e, i) => {
          return <span key={i}>{e}</span>;
        })}
      </div>
      <input
        onChange={e => {
          setKeyword(e.target.value);
        }}
      ></input>
    </div>
  );
}
