import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="img-overlay">
        <h1>
          <span>50%</span> discount on new arrivals
        </h1>
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
  width: 100vw;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.4);

  .img-overlay {
    position: absolute;
    background: url("https://cdn.shopify.com/s/files/1/0419/1525/products/brown-leather-captain-boot-1_1024x1024.jpg?v=1566489782")
      no-repeat center center/cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    & h1 {
      z-index: -1;
      color: #fff;
      font-size: 3.5rem;
      text-shadow: 0 0 0 brown;
      background: rgba(0, 0, 0, 0.3);
      height: 100px;
      margin: auto;
      padding: 1rem;
      font-family: "Lobster", cursive;
    }
  }
`;

export default Banner;
