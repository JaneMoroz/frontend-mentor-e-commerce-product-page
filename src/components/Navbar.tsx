import React from "react";
import { observer } from "mobx-react";
import { Menu, Cart as CartIcon, Close, Logo } from "../assets/icons";
import { useStore } from "../context/context";
import userImage from "../assets/images/image-avatar.png";
import Cart from "./Cart";

const links = ["collections", "men", "women", "about", "contact"];

const Navbar: React.FC = observer(() => {
  const { navStore, cartStore } = useStore();
  return (
    <div className="container">
      <nav className="navbar flex flex_justify_space-between">
        <div className="navbar__menu flex">
          <button
            onClick={() => navStore.toggleMenu()}
            type="button"
            className="navbar__menu_btn btn btn_type_icon"
            aria-label="menu"
          >
            <Menu />
          </button>
          <a href="#" aria-label="Sneakers">
            <Logo />
          </a>
        </div>
        <div className={`navbar__links ${navStore.menuIsOpen && "open"}`}>
          <button
            onClick={() => navStore.toggleMenu()}
            type="button"
            className="btn btn_type_icon"
            aria-label="close menu"
          >
            <Close />
          </button>
          {links.map((link, index) => (
            <a key={index} href="#" className="btn btn_type_text">
              {link}
            </a>
          ))}
        </div>
        <div className="navbar__user flex">
          <button
            onClick={() => navStore.toggleCart()}
            type="button"
            className="btn btn_type_icon"
            aria-label="cart"
          >
            <CartIcon />
            {cartStore.cartItems.length !== 0 && (
              <span>
                {cartStore.cartItems.reduce(
                  (acc, cartItem) => acc + cartItem.quantity,
                  0
                )}
              </span>
            )}
          </button>
          <a href="#" className="btn btn_type_img" aria-label="user account">
            <img src={userImage} alt="user" />
          </a>
        </div>
        <Cart />
      </nav>
      <div className={`overlay ${navStore.menuIsOpen && "open"}`}></div>
    </div>
  );
});

export default Navbar;
