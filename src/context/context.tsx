import React from "react";
import { useLocalObservable } from "mobx-react";
import { createStore } from "../store/store";
import { ICartItem } from "../interfaces/ICartItem";
import { IProduct } from "../interfaces/IProduct";

type ContextType = {
  menuIsOpen: boolean;
  cartIsOpen: boolean;
  single_product: IProduct;
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
  toggleMenu: () => void;
  toggleCart: () => void;
};

const Context = React.createContext({} as ContextType);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(createStore);
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const useStore = () => React.useContext(Context);
