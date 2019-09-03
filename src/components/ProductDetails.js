import React, { Component } from "react";
import styled from "styled-components";

import { ProductConsumer } from "./Context";
import { shopProducts } from "./Data";

class ProductDetails extends Component {
  // state = {
  //   selectedProduct: ""
  // };

  // componentDidMount() {
  //   const products = shopProducts.find(product => {
  //     if (product.id === this.props.match.params.id) {
  //       console.log("Product Page", product.price);
  //     }
  //   });

  //   this.setState({ selectedProduct: products });
  // }

  render() {
    return (
      <ProductPage>
        <ProductConsumer>
          {value => {
            const { products } = value;
            products.find(product => {
              if (product.id === this.props.match.params.id) {
                return (
                  <div className="page">
                    {console.log(product.name)}

                    <h1>Product Name: {console.log(product.name)}</h1>
                    {/* This doesnt also show in the DOM but logs to the console */}
                  </div>
                );
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
