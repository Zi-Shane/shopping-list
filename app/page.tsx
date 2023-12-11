'use client';

import { SelectionMenu, ShoppingList } from 'components';
import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const addItem = (item: string) => {
    setItems(prev => [...prev, item]);
  };

  return (
    <>
      <SelectionMenu addItem={addItem} />
      <ShoppingList items={items} />
    </>
  );
}
