import React from "react";
import { observer } from "mobx-react";
import { Delete } from "../assets/icons";
import { useStore } from "../context/context";

const Cart: React.FC = observer(() => {
  const store = useStore();
  return (
    <div className={`cart ${store.cartIsOpen && "visible"}`}>
      <p className="cart__title">cart</p>
      {store.cartItems.length === 0 && (
        <div className="cart__empty">
          <p>Your cart is empty.</p>
        </div>
      )}
      {store.cartItems.length !== 0 && (
        <>
          <ul>
            {store.cartItems.map((cartItem) => (
              <li key={cartItem.product.id} className="cart-item">
                <img src={cartItem.product.images[0]} alt="product-1" />
                <div className="cart-item__details">
                  <div>
                    <p>{cartItem.product.title}</p>
                    <p>
                      ${cartItem.product.final_price} x {cartItem.quantity}
                      <span>
                        ${cartItem.product.final_price * cartItem.quantity}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => store.removeFromCart(cartItem.product.id)}
                    type="button"
                    className="btn btn_type_icon"
                  >
                    <Delete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn_type_primary">
            Checkout
          </button>
        </>
      )}
    </div>
  );
});

export default Cart;
