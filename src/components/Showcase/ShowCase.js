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
          <h2>Free Shipping</h2>
          <p>Delivery in 4 Days</p>
        </div>
      </ShowCaseContainer>

      <FlowerShow className="flower-show">
        <div className="flower-position">
          <img src={discount} alt="" className="img-featured" />
        </div>
      </FlowerShow>
      <Featured />
    </section>
  );
};

const FlowerShow = styled.div`
  .flower-show {
    position: relative;
    background: rgba(0, 0, 0, 0.6);
    height: 30vh;
    width: 40%;
    opacity: 0.4;
    display: flex;
  }

  .flower-position {
    position: absolute;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
  }
  img {
    width: 10%;
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
