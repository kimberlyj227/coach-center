import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Row>
        <h3>Welcome! Please sign in to continue.</h3>
      </Row>
      <Row>
        <Button
          onClick={() => loginWithRedirect()}
          id="login-button"
          >
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </Button>  
      </Row>
    </div>
  )
}

export default LogIn;