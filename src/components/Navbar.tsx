import React from "react";
import { observer } from "mobx-react";
import userImage from "../assets/images/image-avatar.png";
import Cart from "./Cart";
import { Menu, Cart as CartIcon, Close, Logo } from "../assets/icons";
import { useStore } from "../context/context";

const links = ["collections", "men", "women", "about", "contact"];

const Navbar: React.FC = observer(() => {
  const store = useStore();
  return (
    <div className="container">
      <nav className="navbar flex flex_justify_space-between">
        <div className="navbar__menu flex">
          <button
            onClick={() => store.toggleMenu()}
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
        <div className={`navbar__links ${store.menuIsOpen && "open"}`}>
          <button
            onClick={() => store.toggleMenu()}
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
            onClick={() => store.toggleCart()}
            type="button"
            className="btn btn_type_icon"
            aria-label="cart"
          >
            <CartIcon />
            {store.cartItems.length !== 0 && (
              <span>
                {store.cartItems.reduce(
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
      <div className={`overlay ${store.menuIsOpen && "open"}`}></div>
    </div>
  );
});

export default Navbar;
