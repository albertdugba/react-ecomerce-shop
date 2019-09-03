import React, { Component } from "react";
import { shopProducts } from "../Components/Data";

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: shopProducts,
    productDetails: ""
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

  // getProductItem = id => {
  //   const product = [...this.state.products];
  //   const tempProduct = product.find(product => product.id === id);
  //   this.setState({ productDetails: tempProduct });
  // };

  render() {
    const { children } = this.props;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProductItem: this.getProductItem
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
