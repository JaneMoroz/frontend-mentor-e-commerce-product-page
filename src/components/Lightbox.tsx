import React from "react";
import { observer } from "mobx-react";
import Gallery from "./Gallery";
import { useStore } from "../context/context";
import { Close } from "../assets/icons";

const Lightbox: React.FC = observer(() => {
  const { singleProductStore } = useStore();

  return (
    <>
      <div
        className={`lightbox ${singleProductStore.lightboxIsOpen && "open"}`}
      >
        <div className="lightbox__inner">
          <button
            onClick={() => singleProductStore.toggleLightbox()}
            type="button"
            className="btn btn_type_icon lightbox__close-btn"
            aria-label="close"
          >
            <Close />
          </button>
          <Gallery lightbox={true} />
        </div>
      </div>
      <div
        className={`overlay ${singleProductStore.lightboxIsOpen && "open"}`}
      ></div>
    </>
  );
});

export default Lightbox;
