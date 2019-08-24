import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartColumn from "./CartColumn";

const Cart = () => {
  return (
    <CartContainer>
      <CartInfo className="cart-info">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </CartInfo>
      <span>
        <p>Shopping Cart</p>
        <p>Check Out</p>
        <p>Order Complete</p>
      </span>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Your Cart</h2>
      <p style={{ textAlign: "center" }}>Your cart is empty</p>
      <Link to="/">
        <button
          style={{
            color: "#fff",
            background: "teal",
            fontWeight: "bold",
            border: "none",
            outline: "none",
            padding: ".75rem",
            justifyContent: "center"
          }}
        >
          Back Home
        </button>
      </Link>

      <CartColumn />
    </CartContainer>
  );
};

const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin-top: -20px;
    height: 70px;
    width: 70px;
    padding: 1rem;
    border-radius: 50%;
    justify-content: center;
    text-align: center;
    background: teal;
    font-weight: bold;
    font-size: 2rem;

    color: #fff;
  }
`;

const CartContainer = styled.div`
  max-width: 950px;
  margin: auto;
  margin-top: 60px;

  span {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid teal;
    font-weight: bold;
  }
`;
export default Cart;
