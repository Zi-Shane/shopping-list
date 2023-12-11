import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSuggestions } from 'hooks';

type SelectionMenuProps = {
  addItem: (item: string) => void;
};

export function SelectionMenu({ addItem }: SelectionMenuProps) {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const suggestions = useSuggestions(
    'https://api.frontendeval.com/fake/food/',
    keyword,
  );

  return (
    <div
      tabIndex={0}
      className={styles.selectMenu}
      // onBlur={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
    >
      <h1>Shopping List</h1>

      <input
        className={styles.selectInput}
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
          setIsOpen(true);
        }}
      />

      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {suggestions.map(item => {
          return (
            <li
              className={styles.option}
              key={crypto.randomUUID()}
              onClick={() => {
                setIsOpen(false);
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
