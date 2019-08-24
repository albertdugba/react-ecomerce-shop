import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { FlowerConsumer } from "./Context";

const Featured = () => {
  return (
    <div style={{ fontSize: "1rem", marginTop: "180px" }}>
      <FeaturedSpan className="featured">
        <span />
        <h2>Featured Products </h2>
        <span />
      </FeaturedSpan>
      <div className="featured-products">
        <FlowerConsumer>
          {value => {
            const { img, title, price, info } = value.flowerDetails;
            // value.flowerDeatils.map(item => console.log(item.title));
            return (
              <div>
                <p>{title}</p>
                <p>{price}</p>
                <p>{info}</p>
              </div>
            );
          }}
        </FlowerConsumer>
      </div>
    </div>
  );
};

const FeaturedSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  margin: 20px;

  span {
    border-bottom: 2px solid teal;
    width: 30%;
    padding: 0 3rem;
  }

  p {
    padding: 1.6rem;
  }
`;

export default Featured;
