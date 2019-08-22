import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlowerConsumer } from "./Context";

const Flower = ({ title, price, img, alt }) => {
  return (
    <CardContainer>
      <FlowerConsumer>
        {value => {
          return (
            <div>
              <img
                src={img}
                alt={alt}
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "0",
                  padding: "0"
                }}
                className="card-img-container"
              />
              <div className="card-footer">
                <p>{title}</p>
                <span>${parseFloat(price).toFixed(2)}</span>
              </div>
            </div>
          );
        }}
      </FlowerConsumer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: transparent;
  padding: 12px;
  margin: 0;
  background: #fff;

  .card-footer {
    background: rgb(185, 230, 215);
    color: grey;
    font-weight: bold;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -20px;
    padding: 0;

    span {
      color: teal;
    }
  }
`;

export default Flower;
