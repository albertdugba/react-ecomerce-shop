import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductConsumer } from "./Context";

const ProductItem = ({ id, img, name, price }) => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <ProductContainer>
            <Link to={`details/${id}`}>
              <img
                src={img}
                alt={name}
                onClick={() => value.handleProductDetails(id)}
                // This onClick events gets called from the context api
              />
            </Link>

            <p>{name}</p>
            <p>GHC {parseFloat(price).toFixed(2)}</p>
            <Link to={`details/${id}`}>
              <button>View Item ></button>
            </Link>
          </ProductContainer>
        );
      }}
    </ProductConsumer>
  );
};

const ProductContainer = styled.div`
  background: #fff;
  /* border: 1px solid brown; */

  img {
    width: 230px;
    height: 230px;
  }

  button {
    border: none;
    outline: none;
    padding: 0.5rem;
    margin-top: 12px;
    border: 1px solid grey;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #000;
      color: #fff;
      border: none;
    }
  }
`;

export default ProductItem;
