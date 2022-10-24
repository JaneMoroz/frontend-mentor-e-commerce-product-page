import { makeObservable, observable, action } from "mobx";

class NavStore {
  @observable cartIsOpen: boolean;
  @observable menuIsOpen: boolean;
  constructor() {
    this.menuIsOpen = false;
    this.cartIsOpen = false;
    makeObservable(this);
  }

  @action
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  @action
  toggleCart() {
    this.cartIsOpen = !this.cartIsOpen;
  }
}

export default NavStore;
