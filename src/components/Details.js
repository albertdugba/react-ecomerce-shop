import React from "react";
import { FlowerConsumer } from "./Context";

const Details = () => {
  return (
    <FlowerConsumer>
      {value => {
        const { title, img, id, price } = value.flowerDetails;
        return (
          <div>
            <h1>Flower Details Page</h1>
            <p>{price}</p>
          </div>
        );
      }}
    </FlowerConsumer>
  );
};

export default Details;
