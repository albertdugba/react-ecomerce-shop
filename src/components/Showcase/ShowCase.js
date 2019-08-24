import React from "react";
import styled from "styled-components";

import Featured from "../Featured";
import retail from "./online-retail.svg";
import shipping from "./shipping.svg";
import support from "./support.svg";
import discount from "./discount.jpg";

const ShowCase = () => {
  return (
    <section>
      <ShowCaseContainer className="showcase-container">
        <div className="showcase-area">
          <img src={support} alt="full-customer-support-icon" />
          <h2>24/7 Customer Support</h2>
          <p>Call us any time</p>
        </div>
        <div className="showcase-area">
          <img src={retail} alt="online-secure-payment-icon" />
          <h2>Secure Online Experience</h2>
          <p>Send Within 30 Days</p>
        </div>
        <div className="showcase-area">
          <img src={shipping} alt="free-shopping-icon" />
          <h2>Free Shipping Globally</h2>
          <p>Delivery in 4 Days</p>
        </div>
      </ShowCaseContainer>

      <FlowerShow>
        <img
          src={discount}
          alt=""
          className="img-featured"
          style={{ marginTop: "60px" }}
        />
        <div className="flower-position">
          <p className="flower-position-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ut?
          </p>
        </div>
      </FlowerShow>
      <Featured />
    </section>
  );
};

const FlowerShow = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 85vh;
  position: relative;
  margin-top: 80px;
  background: teal;

  .flower-position {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0.5;
    height: 100%;
    width: 100%;

    &-text {
      z-index: -1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

const ShowCaseContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  height: 40vh;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 50px;
  img {
    width: 100px;
  }

  .showcase-area {
    border: 1px solid teal;
    text-align: center;
    padding: 1rem;
    height: 100%;
    border-radius: 15px;
  }

  .showcase-area > * {
    margin-top: 15px;
  }
`;

export default ShowCase;
