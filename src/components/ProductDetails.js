import React, { Component } from "react";
import styled from "styled-components";

import { ProductConsumer } from "./Context";

class ProductDetails extends Component {
  render() {
    return (
      <ProductPage>
        <ProductConsumer>
          {value => {
            const { products } = value;
            products.find(product => {
              if (product.id === this.props.match.params.id) {
                return <div className="page">{console.log(product.name)}</div>;
              }
            });
          }}
        </ProductConsumer>
      </ProductPage>
    );
  }
}
const ProductPage = styled.div`
  max-width: 1000px;
  margin: 30px auto;
`;

export default ProductDetails;
