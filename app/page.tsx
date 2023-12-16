'use client';

import { ShoppingList } from './components';
import { Tmpl_DebounceHook } from './tmpl';
import { Tmpl_SelectionMenu } from './tmpl';

export default function Home() {
  return (
    <>
      {/* <Tmpl_SelectionMenu /> */}
      {/* <Tmpl_DebounceHook /> */}
      <ShoppingList />
    </>
  );
}
