import React from "react";
import userImage from "../assets/images/image-avatar.png";
import logo from "../assets/logo.svg";
import Cart from "./Cart";
import { Menu, Cart as CartIcon, Close } from "../assets/icons";

const links = ["collections", "men", "women", "about", "contact"];

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar flex flex_justify_space-between">
        <div className="navbar__menu flex">
          <button
            type="button"
            className="navbar__menu_btn btn btn_type_icon-big"
          >
            <Menu />
          </button>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar__links">
          <button type="button" className="btn btn_type_icon-big">
            <Close />
          </button>
          {links.map((link) => (
            <a href="#" className="btn btn_type_text">
              {link}
            </a>
          ))}
        </div>
        <div className="navbar__user flex">
          <button type="button" className="btn btn_type_icon-big">
            <CartIcon />
          </button>
          <a href="#" className="btn btn_type_img">
            <img src={userImage} alt="user" />
          </a>
        </div>
        <Cart />
      </nav>
      <div className="overlay"></div>
    </div>
  );
};

export default Navbar;
