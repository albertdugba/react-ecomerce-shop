import React from "react";
import styled from "styled-components";

const Product = ({ id, img, name, price }) => {
  return (
    <ProductContainer>
      <p>{name}</p>
      <img src={img} alt={name} />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  background: #fff;
  /* border: 1px solid brown; */

  img {
    width: 230px;
    height: 230px;
  }
`;

export default Product;
