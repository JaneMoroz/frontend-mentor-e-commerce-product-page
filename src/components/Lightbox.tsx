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
} from "../assets/images";
import ProductGalleryBtns from "./GalleryBtns";

const Lightbox = () => {
  return (
    <div className="lightbox">
      <div className="lightbox__gallery">
        <button type="button" className="lightbox__gallery-close">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div className="product__gallery-image_size_bg">
          <ProductGalleryBtns lightbox={true} />
          <img src={img1} alt="main image" />
        </div>
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
    </div>
  );
};

export default Lightbox;
