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
              <Link to="/details">
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
              </Link>
              <div className="card-footer">
                <p>{title}</p>
                <span>${parseFloat(price).toFixed(2)}</span>
                <button>View ></button>
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
    color: #000;
    font-weight: bold;
    width: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      color: teal;
      font-weight: bold;
    }
  }

  button {
    margin-top: 15px;
    width: 100px;
    height: 35px;
    font-weight: bold;
    align-self: center;
    background: #fff;
    font-size: 1.125rem;
    color: teal;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all ease-out 0.3s;
    border: 0.6px solid grey;
  }

  button:hover {
    background: teal;
    color: #fff;
    border: 1px solid teal;
  }
`;

export default Flower;
