import { useState } from 'react';
import { SelectionMenu, SelectedList } from 'components';

export type item = {
  id: string;
  checked: boolean;
  name: string;
};

export function ShoppingList() {
  const [items, setItems] = useState<item[]>([]);

  function addItem(name: string) {
    setItems(prev => [
      ...prev,
      { id: `item-${crypto.randomUUID()}`, checked: false, name },
    ]);
  }

  function strikeToggle(id: string) {
    setItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }

        return item;
      });
    });
  }

  function removeItem(id: string) {
    setItems(currentItems => {
      return currentItems.filter(item => item.id != id);
    });
  }

  return (
    <>
      <SelectionMenu addItem={addItem} />
      <SelectedList
        items={items}
        strikeToggle={strikeToggle}
        removeItem={removeItem}
      />
    </>
  );
}
