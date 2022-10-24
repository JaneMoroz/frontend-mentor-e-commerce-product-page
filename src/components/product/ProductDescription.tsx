import React, { useState } from "react";
import { Plus, Minus, Cart } from "../../assets/icons/index";
import { useStore } from "../../context/context";
import { formatCurrency } from "../../utilities/formatCurrency";

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const { singleProductStore, cartStore } = useStore();

  const handleAddToCart = () => {
    const newCartItem = {
      product: { ...singleProductStore.product },
      quantity: quantity,
    };
    cartStore.addToCart(newCartItem);
    setQuantity(1);
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
        {singleProductStore.product.company}
      </span>
      <h1>{singleProductStore.product.title}</h1>
      <p>{singleProductStore.product.description}</p>
      <div className="product__price">
        <p>
          {formatCurrency(singleProductStore.product.final_price)}{" "}
          <span className="product__price-tag">
            {singleProductStore.product.discount}%
          </span>
        </p>
        <p>{formatCurrency(singleProductStore.product.price)}</p>
      </div>
      <div className="product__cta flex">
        <div className="product__quantity flex">
          <button
            onClick={() => handleQuantity("dec")}
            type="button"
            className="btn btn_type_icon"
            aria-label="decrease quantity"
          >
            <Minus />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantity("inc")}
            type="button"
            className="btn btn_type_icon"
            aria-label="increase quantity"
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
