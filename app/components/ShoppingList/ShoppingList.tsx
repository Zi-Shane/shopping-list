import { useShoppingDict } from '@/hooks';
import { SelectionMenu, SelectedList } from 'components';

export function ShoppingList() {
  const { items, addItem, removeItem, changeAmount, strikeToggle } =
    useShoppingDict();

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
