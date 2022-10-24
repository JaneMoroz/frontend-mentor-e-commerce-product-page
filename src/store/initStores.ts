import CartStore from "./cartStore";
import NavStore from "./navStore";
import SingleProductStore from "./singleProductStore";

function initStores() {
  const cartStore = new CartStore();
  const navStore = new NavStore();
  const singleProductStore = new SingleProductStore();

  return {
    cartStore,
    navStore,
    singleProductStore,
  };
}

export default initStores;
