import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Jumbotron,
} from "react-bootstrap";
import './Homepage.css'
import FingerPrint from '../assets/blkFingerPrint.png'


const Homepage = () => {

  const signUpBtn = () => {
    console.log("hit sign up path");
  }

  const signInBtn = () => {
    console.log("hit sign in path");
  }
  return (
    <Container id="main-container">
      <Jumbotron id="main-jumbotron">
        <h1>SURE V<img className="fplogo" src={FingerPrint} alt='finger print logo' />TE</h1>
        <hr />
        <p>
          OUR MISSION:
        </p>
        <p>
          Mobile-friendly voting made safe and secure using 2FA and Face Recognition.
        </p>
        <hr />
        <br />
        <ButtonGroup size="lg" className="mr-3">
          <Button href="/signup" onClick={() => {signUpBtn()}} variant="dark" id='left-button'>Sign Up</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="mr-3">
          <Button href="/signin" onClick={() => {signInBtn()}} variant="dark" id='right-button'>Sign In</Button>
        </ButtonGroup>
      </Jumbotron>
    </Container>
  );
};

export default Homepage;
