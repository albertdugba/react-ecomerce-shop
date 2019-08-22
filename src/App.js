import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Flowers from "./components/Flowers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ShowCase from "./components/ShowCase/ShowCase";
import Details from "./components/Details";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />

        <Switch>
          <Route exact path="/" component={ShowCase} />
          <Route exact path="/store" component={Flowers} />
          <Route exact path="/details" component={Details} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
