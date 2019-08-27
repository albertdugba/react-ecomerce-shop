import React from "react";
import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-item">
        <p>About</p>
        <p>Company</p>
        <p>Location</p>
        <p>Hours</p>
      </div>
      <div className="footer-item">
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>LinkedIn</p>
      </div>
      <div className="footer-item">
        <h3>Newsletter:</h3>
        <input type="text" placeholder="Enter your email" />
        <button>
          <FaTelegramPlane />
        </button>
        <p>&copy;2019. All Rights Reserved</p>
        <p>
          Made with <FaHeart /> with React
        </p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  line-height: 1.5;
  background: grey;
  padding: 1rem;

  input {
    outline: none;
    border: none;
    padding: 0.29rem;
  }

  button {
    padding: 0.29rem;
    border: none;
    outline: none;
    border-left: 1px solid grey;
  }
`;

export default Footer;
