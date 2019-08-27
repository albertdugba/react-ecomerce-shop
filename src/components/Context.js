import React, { Component } from "react";
import { shopProducts } from "../Components/Data";

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: shopProducts
  };

  componentDidMount() {
    this.setProductItems();
  }

  setProductItems = () => {
    let newProducts = [];
    shopProducts.forEach(item => {
      const singleItem = { ...item };
      newProducts.push(singleItem);
      this.setState(() => {
        return {
          products: newProducts
        };
      });
    });
  };

  getProductItem = id => {
    let product = [...this.state.products].find(item => item.id === id);
    return product;
  };

  handleProductDetails = id => {
    console.log("Product Details Page", id);
  };

  render() {
    const { children } = this.props;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProductDetails: this.handleProductDetails
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
