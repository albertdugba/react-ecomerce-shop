import React from "react";
import styled from "styled-components";

import retail from "./online-retail.svg";
import shipping from "./shipping.svg";
import support from "./support.svg";
import discount from "./discount.jpg";

const ShowCase = () => {
  return (
    <section>
      <ShowCaseContainer className="showcase-container">
        <div className="showcase-area">
          <img src={support} alt="" />
          <h2>24/7 Customer Support</h2>
          <p>Call us any time</p>
        </div>
        <div className="showcase-area">
          <img src={retail} alt="" />
          <h2>Easy Online Returns</h2>
          <p>Send Within 30 Days</p>
        </div>
        <div className="showcase-area">
          <img src={shipping} alt="" />
          <h2>Free Shipping</h2>
          <p>Delivery in 4 Days</p>
        </div>
      </ShowCaseContainer>

      <FlowerShow className="flower-show">
        <div className="flower-position">
          <img src={discount} alt="" className="img-featured" />
        </div>
      </FlowerShow>
    </section>
  );
};

const FlowerShow = styled.div`
  position: relative;
  margin-top: 50px;
  width: 1100px;
  background: rgba(0, 0, 0.5);
  opacity: 0.5;
  img {
    width: 100%;
  }

  .flower-position {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: red;
    z-index: -1;
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
