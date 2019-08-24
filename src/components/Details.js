import React from "react";
import styled from "styled-components";

import { FlowerConsumer } from "./Context";
import Title from "./Title";

const Details = () => {
  return (
    <FlowerConsumer>
      {value => {
        const { title, img, id, price, info } = value.flowerDetails;
        return (
          <div>
            <Title name="Your" title="Cart" />
            <FlowerDetails>
              <img src={img} alt="" />
              <div className="flower-details">
                <h1>{title}</h1>
                <p>{info}</p>
              </div>
            </FlowerDetails>
          </div>
        );
      }}
    </FlowerConsumer>
  );
};

const FlowerDetails = styled.div`
  display: flex;

  img {
    width: 340px;
    height: 340px;
  }
`;

export default Details;
