import React, { Component } from "react";
import { FaLock } from "react-icons/fa";
import styled from "styled-components";

class AccountSignIn extends Component {
  render() {
    return (
      <SignIn>
        <p>
          <span>
            <FaLock />
          </span>{" "}
        </p>

        <form></form>
      </SignIn>
    );
  }
}

const SignIn = styled.div`
  max-width: 900px;
  margin: 20px auto;
  text-align: center;
  font-size: 2rem;
`;

export default AccountSignIn;
