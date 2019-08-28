import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <FooterContainer>
      <p>
        <FaExclamationTriangle style={{ color: "red", fontSize: "3.5rem" }} />
      </p>
      <p style={{ fontSize: "2rem" }}>
        Ooops{" "}
        <span role="img" aria-label="sad">
          😞
        </span>
        , Sorry the page you're looking for doesn't exist
      </p>
      <Link to="/">
        <button>
          {" "}
          <FaArrowLeft />
          Back Home
        </button>
      </Link>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 25px auto;
  text-align: center;

  button {
    padding: 0.6rem;
    border: none;
    outline: none;
    border: 1px solid #000;
    margin-top: 20px;
    align-items: center;
    margin: 1rem;
  }
`;

export default NotFound;
