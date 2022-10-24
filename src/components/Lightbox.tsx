import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { useStore } from "../context/context";
import { Close } from "../assets/icons";
import Gallery from "./Gallery";

const Lightbox: React.FC = observer(() => {
  const { singleProductStore } = useStore();

  return ReactDOM.createPortal(
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
    </>,
    document.getElementById("portal") as HTMLElement
  );
});

export default Lightbox;
