import React from "react";
import styled from "styled-components";

const Cart = () => {
  return (
    <CartContainer>
      <h1>Cart Component</h1>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  max-width: 950px;
  margin: 35px auto;
`;

export default Cart;
