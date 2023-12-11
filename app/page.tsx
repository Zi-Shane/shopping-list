'use client';

import { SelectionMenu, ShoppingList } from 'components';
import { useState } from 'react';
import { Tmpl_SelectionMenu } from './tmpl';

export default function Home() {
  // const [items, setItems] = useState<string[]>([]);
  // const addItem = (item: string) => {
  //   setItems(prev => [...prev, item]);
  // };

  return (
    <>
      {/* <SelectionMenu addItem={addItem} /> */}
      {/* <ShoppingList items={items} /> */}
      <Tmpl_SelectionMenu />
    </>
  );
}
