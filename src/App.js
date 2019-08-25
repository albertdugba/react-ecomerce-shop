import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import ShopList from "./Components/ShopList";
import { ProductProvider } from "./Components/Context";

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShopList} />
          </Switch>
        </React.Fragment>
      </ProductProvider>
    );
  }
}

export default App;
