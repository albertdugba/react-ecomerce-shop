import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./Context";

class ProductDetails extends Component {
  state = {
    selectedProduct: []
  };

  componentDidMount() {
    // I want to select the selected product and update the state
  }

  render() {
    return (
      <ProductPage>
        <ProductConsumer>
          {value => {
            return (
              <h1>Selected Product Page ID: {this.props.match.params.id}</h1>
            );
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
