import { makeObservable, observable, action } from "mobx";
import { IProduct } from "../interfaces/IProduct";

class SingleProductStore {
  @observable lightboxIsOpen: boolean;
  @observable product: IProduct;
  constructor() {
    makeObservable(this);
    this.lightboxIsOpen = false;
    this.product = {
      id: "1",
      title: "Fall Limited Edition Sneakers",
      company: "SNEAKER COMPANY",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250,
      discount: 50,
      final_price: 125,
      images: [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg",
      ],
    };
  }

  @action
  toggleLightbox() {
    this.lightboxIsOpen = !this.lightboxIsOpen;
  }
}

export default SingleProductStore;
