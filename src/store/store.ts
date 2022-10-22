import { ICartItem } from "../interfaces/ICartItem";

export function createStore() {
  return {
    menuIsOpen: false,
    cartIsOpen: false,
    single_product: {
      id: "1",
      title: "Fall Limited Edition Sneakers",
      company: "SNEAKER COMPANY",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250,
      discount: 50,
      final_price: 125,
      images: [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg",
      ],
    },
    cartItems: [] as ICartItem[],
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
    },
    removeFromCart(id: string) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.product.id !== id
      );
    },
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    toggleCart() {
      this.cartIsOpen = !this.cartIsOpen;
    },
  };
}
