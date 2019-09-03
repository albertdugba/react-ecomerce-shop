import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { shopProducts } from "./Data";
import { ProductConsumer } from "./Context";

class ProductItem extends Component {
  render() {
    const { id, img, name, price } = this.props;
    return (
      <ProductConsumer>
        {value => {
          return (
            <ProductContainer>
              <Link to={`details/${id}`}>
                <img src={img} alt={name} />
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
  }
}

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
