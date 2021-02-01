import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext([false, () => {}]);

export const MenuState = props => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const collapse = () => {
      const { matches } = matchMedia("(max-width:37.49999em)");
      if (matches) {
        setOpen(false);
      }
      else {
        setOpen(true);
      }
    };
    collapse();
    window.addEventListener("resize", collapse);
    return () => { window.removeEventListener("resize", collapse); };
  }, []);

  return (
    <Context.Provider value={[open, setOpen]} {...props} />
  );
};

export function useMenuState() {
  return useContext(Context);
}
