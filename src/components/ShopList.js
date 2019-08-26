import React from "react";
import styled from "styled-components";

import { ProductConsumer } from "./Context";
import Product from "./Product";
import Banner from "./Layouts/Banner";
import Title from "./Layouts/Title";

const ShopList = () => {
  return (
    <div>
      <Banner />
      <Title name="Our" title="Products" />
      <ProductCard className="product-card">
        <ProductConsumer>
          {value => {
            const { products } = value;
            console.log(products);
            return products.map(product => (
              <Product key={product.id} {...product} />
            ));
          }}
        </ProductConsumer>
      </ProductCard>
    </div>
  );
};

const ProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  max-width: 1100px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
`;

export default ShopList;
