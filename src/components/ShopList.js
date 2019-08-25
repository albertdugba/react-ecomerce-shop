import React from "react";

import { ProductConsumer } from "./Context";
import Product from "./Product";
import Banner from "./Layouts/Banner";

const ShopList = () => {
  return (
    <div>
      <Banner />
      <ProductConsumer>
        {value => {
          const { products } = value;
          console.log(products);
          return products.map(product => (
            <Product key={product.id} {...product} />
          ));
        }}
      </ProductConsumer>
    </div>
  );
};

export default ShopList;
