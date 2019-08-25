import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <FaShoppingBag />
        </div>

        <ul>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Cart</li>
        </ul>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
