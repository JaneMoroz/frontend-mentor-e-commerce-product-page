import React from "react";
import { Plus, Minus, Cart } from "../../assets/icons/index";

const ProductDescription = () => {
  return (
    <div className="product__description">
      <span className="product__company-tag">sneaker company</span>
      <h1>fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="product__price">
        <p>
          $125.00 <span className="product__price-tag">50%</span>
        </p>
        <p>$250.00</p>
      </div>
      <div className="product__cta flex">
        <div className="product__quantity flex">
          <button type="button" className="btn btn_type_icon">
            <Minus />
          </button>
          <span>0</span>
          <button type="button" className="btn btn_type_icon">
            <Plus />
          </button>
        </div>
        <button type="button" className="btn btn_type_primary">
          <Cart />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
