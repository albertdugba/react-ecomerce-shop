import React from "react";
import { FlowerConsumer } from "../components/Context";
import Flower from "./Flower";

import "../App.css";
import Title from "./Title";

const Flowers = () => {
  return (
    <div>
      <Title />
      <div className="card">
        <FlowerConsumer>
          {value => {
            const { flowers } = value;
            return flowers.map(flower => (
              <Flower key={flower.id} {...flower} />
            ));
          }}
        </FlowerConsumer>
      </div>
    </div>
  );
};

Title.defaultProps = {
  name: "Our",
  title: "Store Flowers"
};

export default Flowers;
