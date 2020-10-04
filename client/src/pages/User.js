// this page will be the users home page
import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import NavBar from "../components/Nav";



const User = () => {
  return (
    <Container fluid>
      <NavBar/>
      <Jumbo/>
      <Row>
        <Col md={8}>
          <h3> information space</h3>
        </Col>
        <Col md={4}>
          <h3> side bar </h3>
        </Col>
      </Row>
      <Row>
        <h3>FOOTER</h3>
      </Row>
    </Container>
  )
}

export default User;