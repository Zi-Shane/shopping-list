import { useState } from 'react';
import { SelectionMenu, SelectedList } from 'components';

export type item = {
  checked: boolean;
  amount: number;
};

export type itemsDict = {
  [name: string]: item;
};

export function ShoppingList() {
  const [items, setItems] = useState<itemsDict>({
    test: { checked: false, amount: 1 },
  });

  function addItem(name: string) {
    setItems(prev => ({ ...prev, [name]: { checked: false, amount: 1 } }));
  }

  function strikeToggle(name: string) {
    setItems(currentItems => {
      return {
        ...currentItems,
        [name]: {
          checked: !currentItems[name].checked,
          amount: currentItems[name].amount,
        },
      };
    });
  }

  function removeItem(name: string) {
    setItems(currentItems => {
      const copyItems = { ...currentItems };
      delete copyItems[name];
      // const { first, ...rest } = currentItems;
      return copyItems;
    });
  }

  function changeAmount(name: string, plus: boolean) {
    setItems(currentItems => {
      let newAmount = currentItems[name].amount + (plus ? 1 : -1);
      if (newAmount < 1) {
        newAmount = 1;
      }
      return {
        ...currentItems,
        [name]: {
          checked: currentItems[name].checked,
          amount: newAmount,
        },
      };
    });
  }

  return (
    <>
      <SelectionMenu addItem={addItem} />
      <SelectedList
        items={items}
        strikeToggle={strikeToggle}
        removeItem={removeItem}
        changeAmount={changeAmount}
      />
    </>
  );
}
