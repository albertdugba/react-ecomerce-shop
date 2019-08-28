import React from "react";
import styled from "styled-components";

import bag from "./bag.jpg";
import discount from "./discount.jpg";

const ShowCaseArea = () => {
  return (
    <ShowCase>
      <div className="img-container">
        <img src={discount} alt="" />
        <div className="img-overlay">
          <h2>100% Quality Leather Shoe & Bag</h2>
          <img src={bag} alt="" />
        </div>
      </div>
    </ShowCase>
  );
};

const ShowCase = styled.div`
  max-width: 1100px;
  margin: auto;
  position: relative;
  /* background: rgba(0, 0, 0, 0.5); */
  z-index: -1;
  img {
    width: 1000px;
    height: 600px;
  }

  .img-overlay {
    position: absolute;
    top: 30px;
    left: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export default ShowCaseArea;
