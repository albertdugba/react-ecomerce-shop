import React from "react";
import styled from "styled-components";

import { ProductConsumer } from "./Context";
import ProductItem from "./ProductItem";
// import Banner from "./Layouts/Banner";
import Title from "./Layouts/Title";

const ShopList = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Title />
      <ProductCard className="product-card">
        <ProductConsumer>
          {value => {
            const { products } = value;
            return products.map(product => (
              <ProductItem key={product.id} {...product} />
            ));
          }}
        </ProductConsumer>
      </ProductCard>
    </div>
  );
};

Title.defaultProps = {
  name: "Our",
  title: "Products"
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
