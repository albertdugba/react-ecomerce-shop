import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import styled from "styled-components";

const NotFound = () => {
  return (
    <FooterContainer>
      <p>
        <FaExclamationTriangle style={{ color: "red", fontSize: "3.5rem" }} />
      </p>
      <p style={{ fontSize: "2rem" }}>
        Ooops!😞, Sorry the page you're looking for doesn't exist
      </p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 25px auto;
  text-align: center;
`;

export default NotFound;
