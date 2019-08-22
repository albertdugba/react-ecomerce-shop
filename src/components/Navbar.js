import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <header>
          <h2 className="logo">
            <Link to="/">
              <FaLeaf style={{ color: "teal", fontSize: "1.9rem" }} />
            </Link>
          </h2>

          <ul>
            <li>
              <Link to="/store">Store</Link>
            </li>
            ||
            <li>Cart</li>||
            <li>Login</li>
          </ul>
        </header>
      </nav>
    );
  }
}

export default Navbar;
