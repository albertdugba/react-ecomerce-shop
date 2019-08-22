import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Flowers from "./components/Flowers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/" component={Flowers} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </div>
    );
  }
}

export default App;
