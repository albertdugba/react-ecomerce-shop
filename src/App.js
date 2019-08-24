import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Flowers from "./components/Flowers";
import Banner from "./components/Layout/Banner";
import Footer from "./components/Layout/Footer";
import ShowCase from "./components/ShowCase/ShowCase";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {/* <Banner /> */}

        <Switch>
          <Route exact path="/" component={ShowCase} />
          <Route exact path="/store" component={Flowers} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
