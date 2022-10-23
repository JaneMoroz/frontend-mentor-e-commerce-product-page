import React, { useState } from "react";
import { Previous, Next } from "../assets/icons/index";
import { useStore } from "../context/context";

type GalleryProps = {
  lightbox: boolean;
};

const Gallery = ({ lightbox }: GalleryProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const store = useStore();

  const handleLightbox = () => {
    if (!lightbox && !store.lightboxIsOpen) {
      store.toggleLightbox();
    }
  };

  const handleImageChange = (index: number) => {
    if (index < 0) {
      setImageIndex(store.single_product.images.length - 1);
    } else if (index > store.single_product.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(index);
    }
  };

  return (
    <>
      <div className="gallery__image_size_bg">
        <button
          onClick={() => handleImageChange(imageIndex - 1)}
          type="button"
          className={`gallery__btn gallery__btn_type_prev ${
            lightbox && "gallery__btn_type_lightbox"
          }`}
        >
          <Previous />
        </button>
        <button
          onClick={() => handleImageChange(imageIndex + 1)}
          type="button"
          className={`gallery__btn gallery__btn_type_next ${
            lightbox && "gallery__btn_type_lightbox"
          }`}
        >
          <Next />
        </button>
        <button type="button" onClick={handleLightbox}>
          <img
            onClick={handleLightbox}
            src={store.single_product.images[imageIndex]}
            alt={store.single_product.title}
          />
        </button>
      </div>
      <div className="gallery__thumbnail flex">
        {store.single_product.images.map((image, index) => (
          <button
            onClick={() => handleImageChange(index)}
            key={index}
            type="button"
            className={`gallery__image_size_sm ${
              index === imageIndex && "active"
            }`}
          >
            <img src={image} alt={store.single_product.title} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
