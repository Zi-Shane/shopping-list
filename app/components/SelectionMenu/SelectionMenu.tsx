import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useFetchSuggestion } from 'hooks';
import { useTimeoutFetch } from 'hooks';

type SelectionMenuProps = {
  addItem: (item: string) => void;
};

export function SelectionMenu({ addItem }: SelectionMenuProps) {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const suggestions = useTimeoutFetch(keyword);

  useEffect(() => {
    if (suggestions.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [suggestions]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(suggestions.length > 0)}
      tabIndex={0}
      className={styles.selectMenu}
    >
      <h1>Shopping List</h1>
      <input
        className={styles.selectInput}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />

      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {suggestions.map(item => {
          return (
            <li
              className={styles.option}
              key={crypto.randomUUID()}
              onMouseDown={e => {
                e.preventDefault();
                // e.stopPropagation();
                addItem(item);
              }}
            >
              <span className={styles.optionText}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
