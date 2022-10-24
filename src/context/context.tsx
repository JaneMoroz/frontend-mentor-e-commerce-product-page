import React from "react";
import initStores from "../store/initStores";
import { ICartItem } from "../interfaces/ICartItem";
import { IProduct } from "../interfaces/IProduct";

type ContextType = {
  cartStore: {
    cartItems: ICartItem[];
    addToCart: (item: ICartItem) => void;
    removeFromCart: (id: string) => void;
  };
  navStore: {
    menuIsOpen: boolean;
    cartIsOpen: boolean;
    toggleMenu: () => void;
    toggleCart: () => void;
  };
  singleProductStore: {
    product: IProduct;
    lightboxIsOpen: boolean;
    toggleLightbox: () => void;
  };
};

const Context = React.createContext({} as ContextType);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const stores = initStores();
  return <Context.Provider value={stores}>{children}</Context.Provider>;
};

export const useStore = () => React.useContext(Context);
