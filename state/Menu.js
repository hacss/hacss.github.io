import { createContext, useContext, useState } from "react";

const Context = createContext([false, () => {}]);

export const MenuState = props => (
  <Context.Provider value={useState(true)} {...props} />
);

export function useMenuState() {
  return useContext(Context);
}
