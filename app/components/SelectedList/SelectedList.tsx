import styles from './styles.module.css';
import { item } from '../ShoppingList';

type SelectedListProps = {
  items: item[];
  strikeToggle: (id: string) => void;
  removeItem: (id: string) => void;
};

export function SelectedList({
  items,
  strikeToggle,
  removeItem,
}: SelectedListProps) {
  return (
    <div className={styles.items}>
      {items.map(item => {
        return (
          <div className={styles.item} key={item.id}>
            <span
              className={`${styles.value} ${
                item.checked ? styles.strike : ''
              }`}
              onClick={() => strikeToggle(item.id)}
            >
              {item.name}
            </span>
            <div
              className={styles.close}
              onClick={() => removeItem(item.id)}
            >
              &times;
            </div>
          </div>
        );
      })}
    </div>
  );
}
