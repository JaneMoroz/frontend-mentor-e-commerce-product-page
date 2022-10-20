import React from "react";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";

const Product = () => {
  return (
    <div className="product grid grid_col_2">
      <ProductGallery />
      <ProductDescription />
    </div>
  );
};

export default Product;
