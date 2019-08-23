import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import "../../App.css";

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
              <FaStoreAlt /> <Link to="/store">Store</Link>
            </li>
            ||
            <li>
              <FaCartPlus /> <Link to="/cart">Cart</Link>
            </li>
            ||
            <li>
              <FaUser /> <Link to="/account">Account</Link>
            </li>
          </ul>
        </header>
      </nav>
    );
  }
}

export default Navbar;
