import React from "react";
import styled from "styled-components";

import { FlowerConsumer } from "./Context";

const Details = () => {
  return (
    <FlowerConsumer>
      {value => {
        const { title, img, id, price, info } = value.flowerDetails;
        return (
          <div>
            <FlowerDetails>
              <img src={img} alt="" />
              <div className="flower-details">
                <h1 style={{ fontSize: "3rem" }}>{title}</h1>
                <p style={{ fontSize: "2rem", color: "teal" }}>
                  ${parseFloat(price).toFixed(2)}
                </p>
                <p>{info}</p>
                <span>{id}</span>
              </div>
            </FlowerDetails>
            <div className="line" />
          </div>
        );
      }}
    </FlowerConsumer>
  );
};

const FlowerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 900px;
  margin: auto;
  margin-top: 40px;

  img {
    width: 200px;
    height: 200px;
  }
`;

export default Details;
