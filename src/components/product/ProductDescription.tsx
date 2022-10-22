import React, { useState } from "react";
import { Plus, Minus, Cart } from "../../assets/icons/index";
import { useStore } from "../../context/context";

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const store = useStore();

  const handleAddToCart = () => {
    const newCartItem = {
      product: { ...store.single_product },
      quantity: quantity,
    };
    store.addToCart(newCartItem);
  };

  const handleQuantity = (direction: string) => {
    if (direction === "dec") {
      if (quantity !== 1) {
        setQuantity(quantity - 1);
      }
    }
    if (direction === "inc") {
      if (quantity !== 10) {
        setQuantity(quantity + 1);
      }
    }
  };

  return (
    <div className="product__description">
      <span className="product__company-tag">
        {store.single_product.company}
      </span>
      <h1>{store.single_product.title}</h1>
      <p>{store.single_product.description}</p>
      <div className="product__price">
        <p>
          ${store.single_product.final_price}{" "}
          <span className="product__price-tag">
            {store.single_product.discount}%
          </span>
        </p>
        <p>${store.single_product.price}</p>
      </div>
      <div className="product__cta flex">
        <div className="product__quantity flex">
          <button
            onClick={() => handleQuantity("dec")}
            type="button"
            className="btn btn_type_icon"
          >
            <Minus />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantity("inc")}
            type="button"
            className="btn btn_type_icon"
          >
            <Plus />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          type="button"
          className="btn btn_type_primary"
        >
          <Cart />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
