import React, { Component } from "react";
import { FaLeaf } from "react-icons/fa";

import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <header>
          <h2 className="logo">
            <FaLeaf style={{ color: "teal", fontSize: "1.9rem" }} />
          </h2>

          <ul>
            <li>Shop</li>||
            <li>Cart</li>||
            <li>Login</li>
          </ul>
        </header>
      </nav>
    );
  }
}

export default Navbar;
