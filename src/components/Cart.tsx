import React from "react";
import { observer } from "mobx-react";
import { Delete } from "../assets/icons";
import { useStore } from "../context/context";
import { formatCurrency } from "../utilities/formatCurrency";

const Cart: React.FC = observer(() => {
  const { cartStore, navStore } = useStore();
  return (
    <div className={`cart ${navStore.cartIsOpen && "visible"}`}>
      <p className="cart__title">cart</p>
      {cartStore.cartItems.length === 0 && (
        <div className="cart__empty">
          <p>Your cart is empty.</p>
        </div>
      )}
      {cartStore.cartItems.length !== 0 && (
        <>
          <ul>
            {cartStore.cartItems.map((cartItem) => (
              <li key={cartItem.product.id} className="cart-item">
                <img src={cartItem.product.images[0]} alt="product-1" />
                <div className="cart-item__details">
                  <div>
                    <p>{cartItem.product.title}</p>
                    <p>
                      {formatCurrency(cartItem.product.final_price)} x{" "}
                      {cartItem.quantity}
                      <span>
                        {formatCurrency(
                          cartItem.product.final_price * cartItem.quantity
                        )}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      cartStore.removeFromCart(cartItem.product.id)
                    }
                    type="button"
                    className="cart-item__delete-btn"
                    aria-label="delete"
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
