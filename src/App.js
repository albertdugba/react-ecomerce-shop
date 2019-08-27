import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { ProductProvider } from "./Components/Context";
import Navbar from "./Components/Layouts/Navbar";
import Banner from "./Components/Layouts/Banner";
import ShopList from "./Components/ShopList";
import ProductDetails from "./Components/ProductDetails";
import HomePage from "./Components/Layouts/HomePage";
import NotFound from "./Components/Layouts/NotFound";
import Cart from "./Components/Cart/Cart";
// import Footer from "./Components/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <React.Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopList} />
            <Route exact path="/details/:id" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </React.Fragment>
      </ProductProvider>
    );
  }
}

export default App;
