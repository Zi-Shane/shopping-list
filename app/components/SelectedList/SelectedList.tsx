import styles from './styles.module.css';
import { itemsDict } from 'hooks';

type SelectedListProps = {
  items: itemsDict;
  strikeToggle: (name: string) => void;
  removeItem: (name: string) => void;
  changeAmount: (name: string, add: boolean) => void;
};

export function SelectedList({
  items,
  strikeToggle,
  removeItem,
  changeAmount,
}: SelectedListProps) {
  return (
    <div className={styles.items}>
      {Object.keys(items).map(name => {
        return (
          <div className={styles.item} key={name}>
            <span
              className={`${styles.value} ${
                items[name].checked ? styles.strike : ''
              }`}
              onClick={() => strikeToggle(name)}
            >
              {name}
            </span>

            <div
              className={`${styles.wrapper} ${
                items[name].checked ? styles.disabled : ''
              }`}
            >
              <span
                className={styles.minus}
                onClick={() => changeAmount(name, false)}
              >
                -
              </span>
              <span className={styles.num}>{items[name].amount}</span>
              <span
                className={styles.plus}
                onClick={() => changeAmount(name, true)}
              >
                +
              </span>
            </div>

            <div className={styles.close} onClick={() => removeItem(name)}>
              &times;
            </div>
          </div>
        );
      })}
    </div>
  );
}
