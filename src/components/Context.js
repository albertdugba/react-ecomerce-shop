import React, { Component } from "react";
import { shopProducts } from "../Components/Data";

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: shopProducts
  };
  render() {
    const { children } = this.props;
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
