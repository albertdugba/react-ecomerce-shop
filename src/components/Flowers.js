import React from "react";
import { FlowerConsumer } from "../components/Context";
import Flower from "./Flower";

import "../App.css";

const Flowers = () => {
  return (
    <div className="card">
      <FlowerConsumer>
        {value => {
          const { flowers } = value;
          return flowers.map(flower => <Flower key={flower.id} {...flower} />);
        }}
      </FlowerConsumer>
    </div>
  );
};

export default Flowers;
