import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <NavBar className="navbar">
        <div className="logo">
          <Link to="/">
            <FaShoppingBag />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>
      </NavBar>
    </header>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 1100px;
  margin: auto;
  margin-top: 40px;
  border-bottom: 1.2px solid grey;
  border-top: 1.2px solid grey;
  padding: 0.4rem;
  font-weight: bold;

  .logo {
    font-size: 2rem;
    color: var(--brandColor);
  }

  ul {
    display: flex;

    li {
      padding: 0 0.6rem;
      a:hover {
        color: var(--brandColor);
      }
    }
  }
`;

export default Navbar;
