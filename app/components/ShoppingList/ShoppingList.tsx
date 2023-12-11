import './styles.css';

export function ShoppingList({ items }: { items: string[] }) {
  return (
    <div className="shoppingList">
      {items.map(item => {
        return (
          <div className="item" key={crypto.randomUUID()}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
