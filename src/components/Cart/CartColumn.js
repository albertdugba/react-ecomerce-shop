import React from "react";

import "../../App.css";

const CartColumn = () => {
  return (
    <React.Fragment>
      <div className="cart-col">
        <div>
          <p>Product</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Total</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartColumn;
