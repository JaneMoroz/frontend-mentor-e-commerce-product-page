import React, { useState } from "react";
import { Previous, Next } from "../assets/icons/index";
import { useStore } from "../context/context";

type GalleryProps = {
  lightbox: boolean;
};

const Gallery = ({ lightbox }: GalleryProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { singleProductStore } = useStore();

  const handleLightbox = () => {
    if (!singleProductStore.lightboxIsOpen) {
      singleProductStore.toggleLightbox();
    }
  };

  const handleImageChange = (index: number) => {
    if (index < 0) {
      setImageIndex(singleProductStore.product.images.length - 1);
    } else if (index > singleProductStore.product.images.length - 1) {
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
          aria-label="previous"
        >
          <Previous />
        </button>
        <button
          onClick={() => handleImageChange(imageIndex + 1)}
          type="button"
          className={`gallery__btn gallery__btn_type_next ${
            lightbox && "gallery__btn_type_lightbox"
          }`}
          aria-label="next"
        >
          <Next />
        </button>
        {/* Big screen */}
        <button
          className="gallery__main-image_screen_bg"
          type="button"
          onClick={handleLightbox}
          aria-label="open lightbox"
        >
          <img
            src={singleProductStore.product.images[imageIndex]}
            alt={singleProductStore.product.title}
          />
        </button>
        {/* Small screen */}
        <img
          className="gallery__main-image_screen_sm"
          src={singleProductStore.product.images[imageIndex]}
          alt={singleProductStore.product.title}
        />
      </div>
      <div className="gallery__thumbnail flex">
        {singleProductStore.product.images.map((image, index) => (
          <button
            onClick={() => handleImageChange(index)}
            key={index}
            type="button"
            className={`gallery__image_size_sm ${
              index === imageIndex && "active"
            }`}
            aria-label={singleProductStore.product.title}
          >
            <img src={image} alt={singleProductStore.product.title} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
