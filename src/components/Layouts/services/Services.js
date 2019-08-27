import React from "react";
import styled from "styled-components";

import CustomerSupport from "./customer-support.png";
import FreeShipping from "./free-shipping.svg";
import OnlineSecure from "./online-secure.svg";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="item-container">
        <img src={CustomerSupport} alt="" />
        <p>24/7 Customer Support</p>
        <span>Call Us Anytime</span>
      </div>
      <div className="item-container">
        <img src={OnlineSecure} alt="" />
        <p>Secure Online Payment</p>
        <p>Payment made secure</p>
      </div>
      <div className="item-container">
        <img src={FreeShipping} alt="" />
        <p>Free Shipping Globally</p>
        <span>Delive in 4 Days</span>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: 1100px;
  margin: 40px auto;
  text-align: center;
  grid-gap: 1.4rem;

  .item-container {
    border: 1.2px solid var(--brandColor);
    padding: 1rem;
    height: 250px;
    border-radius: 4px;

    p {
      font-size: 1.2rem;
    }
  }
  img {
    width: 120px;
    height: 120px;
  }
`;

export default Services;
