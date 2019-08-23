import React, { Component } from "react";

import { shopFlowers, flowerDetails } from "../data/data";
const FlowerContext = React.createContext();

export class FlowerProvider extends Component {
  state = {
    flowers: shopFlowers,
    flowerDetails
  };

  componentDidMount() {
    this.setFlowers();
  }

  setFlowers = () => {
    let newFlowers = [];
    shopFlowers.forEach(item => {
      let singleFlower = { ...item };
      newFlowers.push(singleFlower);
    });

    this.setState(() => {
      return {
        flowers: newFlowers
      };
    });
  };

  getFlowers = id => {
    const flower = this.state.flowers.find(item => item.id === id);
    return flower;
  };

  handleFlowersDetails = id => {
    const flowerDetails = this.getFlowers(id);
    this.setState(() => {
      return {
        flowerDetails
      };
    });
  };

  render() {
    const { children } = this.props;
    return (
      <FlowerContext.Provider
        value={{
          ...this.state,
          handleFlowersDetails: this.handleFlowersDetails
        }}
      >
        {children}
      </FlowerContext.Provider>
    );
  }
}

export const FlowerConsumer = FlowerContext.Consumer;
