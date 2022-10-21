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

type GalleryProps = {
  lightbox: boolean;
};

const Gallery = ({ lightbox }: GalleryProps) => {
  return (
    <>
      <div className="gallery__image_size_bg">
        <button
          type="button"
          className={`gallery__btn gallery__btn_type_prev ${
            lightbox === true ? "gallery__btn_type_lightbox" : ""
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
          className={`gallery__btn gallery__btn_type_next ${
            lightbox === true ? "gallery__btn_type_lightbox" : ""
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
        <img src={img1} alt="main image" />
      </div>
      <div className="gallery__thumbnail flex">
        <button type="button" className="gallery__image_size_sm">
          <img src={img1Small} alt="image 1" />
        </button>
        <button type="button" className="gallery__image_size_sm">
          <img src={img2Small} alt="image 2" />
        </button>
        <button type="button" className="gallery__image_size_sm">
          <img src={img3Small} alt="image 3" />
        </button>
        <button type="button" className="gallery__image_size_sm">
          <img src={img4Small} alt="image 4" />
        </button>
      </div>
    </>
  );
};

export default Gallery;
