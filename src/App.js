import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Flowers from "./components/Flowers";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Flowers />
      </div>
    );
  }
}

export default App;
