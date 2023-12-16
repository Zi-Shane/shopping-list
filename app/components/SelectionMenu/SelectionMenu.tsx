import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { useDebounce, useFetch } from 'hooks';

type SelectionMenuProps = {
  addItem: (item: string) => void;
};

export function SelectionMenu({ addItem }: SelectionMenuProps) {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const suggestions = useDebounce(keyword);
  // const suggestions = useFetch(keyword);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (suggestions.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [suggestions]);

  useEffect(() => {
    if (isOpen) setHighlightIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter': {
          setIsOpen(prev => !prev);
          addItem(suggestions[highlightIndex]);
          break;
        }
        case 'Escape': {
          if (isOpen) setIsOpen(false);
          break;
        }
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) setIsOpen(true);
          const newIndex =
            highlightIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newIndex >= 0 && newIndex < suggestions.length) {
            listRef.current?.children[newIndex].scrollIntoView({
              block: 'nearest',
            });
            setHighlightIndex(newIndex);
          }
          break;
        }
      }
    };
    menuRef.current?.addEventListener('keydown', handler);
    return () => {
      menuRef.current?.removeEventListener('keydown', handler);
    };
  }, [addItem, highlightIndex, isOpen, suggestions]);

  return (
    <div
      ref={menuRef}
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

      <ul
        ref={listRef}
        className={`${styles.options} ${isOpen ? styles.show : ''}`}
      >
        {suggestions.map((item, index) => {
          return (
            <li
              className={`${styles.option} ${
                highlightIndex == index ? styles.highlight : ''
              }`}
              key={crypto.randomUUID()}
              onMouseDown={e => {
                e.preventDefault();
                // e.stopPropagation();
                addItem(item);
              }}
              onMouseEnter={() => setHighlightIndex(index)}
            >
              <span className={styles.optionText}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
