import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img1Small,
  img2Small,
  img3Small,
  img4Small,
} from "../../assets/images";

const ProductGallery = () => {
  return (
    <div className="product__gallery flex flex_direction_column">
      <button type="button" className="product__gallery-image_size_bg">
        <img src={img1} alt="main image" />
      </button>
      <button
        type="button"
        className="product__gallery-btn product__gallery-btn_type_prev"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        className="product__gallery-btn product__gallery-btn_type_next"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="product__gallery-thumbnail flex">
        <button type="button" className="product__gallery-image_size_sm">
          <img src={img1Small} alt="image 1" />
        </button>
        <button type="button" className="product__gallery-image_size_sm">
          <img src={img2Small} alt="image 2" />
        </button>
        <button type="button" className="product__gallery-image_size_sm">
          <img src={img3Small} alt="image 3" />
        </button>
        <button type="button" className="product__gallery-image_size_sm">
          <img src={img4Small} alt="image 4" />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
