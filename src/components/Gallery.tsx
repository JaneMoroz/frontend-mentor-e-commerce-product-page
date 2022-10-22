import React from "react";
import { Previous, Next } from "../assets/icons/index";
import { useStore } from "../context/context";

type GalleryProps = {
  lightbox: boolean;
};

const Gallery = ({ lightbox }: GalleryProps) => {
  const store = useStore();
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
        <img
          src={store.single_product.images[0]}
          alt={store.single_product.title}
        />
      </div>
      <div className="gallery__thumbnail flex">
        {store.single_product.images.map((image, index) => (
          <button key={index} type="button" className="gallery__image_size_sm">
            <img src={image} alt={store.single_product.title} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
