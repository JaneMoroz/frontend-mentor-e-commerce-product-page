import React from "react";

type ProductGalleryBtnsProps = {
  lightbox: boolean;
};

const ProductGalleryBtns = ({ lightbox }: ProductGalleryBtnsProps) => {
  return (
    <>
      <button
        type="button"
        className={`gallery-btn gallery-btn_type_prev ${
          lightbox === true ? "gallery-btn_type_lightbox" : ""
        }`}
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
        className={`gallery-btn gallery-btn_type_next ${
          lightbox === true ? "gallery-btn_type_lightbox" : ""
        }`}
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
    </>
  );
};

export default ProductGalleryBtns;
