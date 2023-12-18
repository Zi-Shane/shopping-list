import { useState } from 'react';

type item = {
  checked: boolean;
  amount: number;
};

export type itemsDict = {
  [name: string]: item;
};

// const {items, addItem, removeItem, changeAmount, strikeToggle} = useShoppingDict()
export function useShoppingDict() {
  const [items, setItems] = useState<itemsDict>({});

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

  return { items, addItem, removeItem, changeAmount, strikeToggle };
}
