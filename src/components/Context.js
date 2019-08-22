import React, { Component } from "react";

import { shopFlowers } from "../data/data";
const FlowerContext = React.createContext();

export class FlowerProvider extends Component {
  state = {
    flowers: shopFlowers
  };
  render() {
    const { children } = this.props;
    return (
      <FlowerContext.Provider value={this.state}>
        {children}
      </FlowerContext.Provider>
    );
  }
}

export const FlowerConsumer = FlowerContext.Consumer;
