import React from "react";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <FooterContainer>
      <p>
        <FaExclamationTriangle />
      </p>
      <p>Sorry the page you're loking for doesn't exist</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export default NotFound;
