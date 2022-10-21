import React from "react";
import Gallery from "../Gallery";

const ProductGallery = () => {
  return (
    <div className="product-gallery flex flex_direction_column">
      <Gallery lightbox={false} />
    </div>
  );
};

export default ProductGallery;
