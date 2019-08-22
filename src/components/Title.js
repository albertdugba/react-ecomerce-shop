import React from "react";
import styled from "styled-components";

import "../App.css";

const Title = ({ name, title }) => {
  return (
    <div>
      <ProductTitle>
        {name} <span>{title}</span>
      </ProductTitle>
    </div>
  );
};

const ProductTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;

  span {
    color: teal;
  }
`;

export default Title;
