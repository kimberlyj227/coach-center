import React from "react";
import {Row, Button, Container} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LandingWrapper = styled.div`
  height: 100vh;
  background-color: #3a506b;
  color: #fff;
  text-align: center;

  #landing {
    padding: 40px;
    margin: 40px;
    align-items: center;
  }

  h1, h3, .btn {
    margin: 0 auto;
  }

  .btn {
    background-color: #5bc0be !important;
    border: none;
  }
`

const Landing = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <LandingWrapper>
      <Container fluid id="landing">
        <Row>
          <h1>COACH CENTER</h1>
        </Row>
        <Row>
          <h3>"Failure to plan is planning to fail"</h3>
        </Row>
        <Row>
          <Button
            onClick={() => loginWithRedirect()}
          >
            LOGIN TO GET STARTED
          </Button>
        </Row>
      </Container>
    </LandingWrapper>
  )
}

export default Landing;