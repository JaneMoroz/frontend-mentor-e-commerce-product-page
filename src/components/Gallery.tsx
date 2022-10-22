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
import { Previous, Next } from "../assets/icons/index";

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
          <Previous />
        </button>
        <button
          type="button"
          className={`gallery__btn gallery__btn_type_next ${
            lightbox === true ? "gallery__btn_type_lightbox" : ""
          }`}
        >
          <Next />
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
