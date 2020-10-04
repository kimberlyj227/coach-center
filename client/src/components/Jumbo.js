import React from "react";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const JumboWrapper = styled.div`
  .jumbotron-fluid {
    height: 300px;
    background: rgb(244,239,8);
    background: linear-gradient(156deg, rgba(244,239,8,1) 0%, rgba(222,218,0,1) 34%, rgba(0,212,255,1) 100%);
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }

  h1 {
    color: #fff;
  }
  

`

const Jumbo = () => {
  return (
    <JumboWrapper>
      <Jumbotron fluid>
        <h1>COACH CENTER</h1>
      </Jumbotron>  
     
    </JumboWrapper>
  )
}

export default Jumbo;