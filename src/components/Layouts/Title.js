import React from "react";
import styled from "styled-components";

const Title = ({ name, title }) => {
  return (
    <TitleHeader>
      <h1>
        {name} <span>{title}</span>
      </h1>
    </TitleHeader>
  );
};

const TitleHeader = styled.div`
  text-align: center;
  margin-top: 35px;
`;

export default Title;
