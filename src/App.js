import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { ProductProvider } from "./Components/Context";
import Navbar from "./Components/Layouts/Navbar";
import ShopList from "./Components/ShopList";
import Footer from "./Components/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShopList} />
          </Switch>
          <Footer />
        </React.Fragment>
      </ProductProvider>
    );
  }
}

export default App;
