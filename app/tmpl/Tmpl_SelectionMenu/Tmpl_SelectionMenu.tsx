import { BiSolidChevronDown } from 'react-icons/bi';
import styles from './styles.module.css';
import { useState } from 'react';

const options = ['aaa', 'bbb', 'ccc', 'ddd'];

export function Tmpl_SelectionMenu() {
  const [value, setValue] = useState('');
  const [isOpen, setIsopen] = useState(false);

  function selectOption(option: string) {
    setValue(option);
    setIsopen(false);
  }

  return (
    <div className={styles.selectMenu}>
      <h1>components</h1>
      <div className={styles.selectButton}>
        <span>{value || 'Choose one'}</span>
        <span
          className={`${styles.chevronDownIcon} ${
            isOpen ? styles.active : ''
          }`}
          onClick={() => setIsopen(prev => !prev)}
        >
          <BiSolidChevronDown />
        </span>
      </div>

      <ul className={`${styles.options} ${isOpen ? styles.active : ''}`}>
        {options.map((option, idx) => {
          return (
            <li
              key={idx}
              className={styles.option}
              onClick={() => selectOption(option)}
            >
              <span className={styles.optionText}>{option}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
