import { makeObservable, observable, action } from "mobx";
import { ICartItem } from "../interfaces/ICartItem";

class CartStore {
  @observable cartItems: ICartItem[];
  constructor() {
    this.cartItems = [];
    makeObservable(this);
  }

  @action
  addToCart(item: ICartItem) {
    const isInCart = this.cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (isInCart) {
      this.cartItems.map((cartItem) => {
        if (cartItem.product.id === item.product.id) {
          return (cartItem.quantity += item.quantity);
        }
        return cartItem;
      });
    } else {
      this.cartItems.push(item);
    }
  }

  @action
  removeFromCart(id: string) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== id
    );
  }
}

export default CartStore;
