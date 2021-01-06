// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState } from "react";
import { 
  Button, 
  ButtonGroup, 
  Col, 
  Container, 
  Form, 
  FormControl, 
  InputGroup, 
  Jumbotron 
} from "react-bootstrap";
import "./SignUp.css";
const axios = require("axios");

// create functional component to hold sign up page data
const SignUp = () => {

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [streetAddress1Value, setStreetAddress1Value] = useState('');
  const [streetAddress2Value, setStreetAddress2Value] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [zipCodeValue, setZipCodeValue] = useState('');


  // create function for submit button 'onclick'
  const submitBtn = () => {
    if (firstNameValue === "" || lastNameValue === "" || usernameValue === "" || passwordValue === "" || streetAddress1Value === "" || cityValue === "" || zipCodeValue === "") {
      console.log("Missing required credentials");
    } else {

      const userObj = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        username: usernameValue,
        password: passwordValue,
        streetAddress1: streetAddress1Value,
        streetAddress2: streetAddress2Value,
        city: cityValue,
        state: stateValue,
        zipCode: zipCodeValue
      }
      console.log(userObj);
      axios.post("/api/signup", {
        data: userObj
      }).then(() => {
        console.log("Successfully registered!");
        alert("Successfully Registered!");
      }).catch(err => {
        console.log(err);
      });

    }
  }

  return (
    <>
      <Container id="main-container">
        <Jumbotron id="signup-jumbotron">
          <h1 id="pi">Personal Information</h1>
          <hr />
          <Form id="signUp-form">
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="First name"
                  onChange={(e) => setFirstNameValue(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Last name"
                  onChange={(e) => setLastNameValue(e.target.value)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setUsernameValue(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label ></Form.Label>
              <Form.Control
                placeholder="Street Address"
                onChange={(e) => setStreetAddress1Value(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                onChange={(e) => setStreetAddress2Value(e.target.value)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label></Form.Label>
                <Form.Control
                  placeholder="City"
                  onChange={(e) => setCityValue(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label></Form.Label>
                <Form.Control
                  // id="state"
                  onChange={(e) => setStateValue(e.target.value)}
                  as="select" defaultValue="State...">
                  <option>State</option>
                  <option id="AL">Alabama</option>
                  <option id="AK">Alaska</option>
                  <option id="AZ">Arizona</option>
                  <option id="AR">Arkansas</option>
                  <option id="CA">California</option>
                  <option id="CO">Colorado</option>
                  <option id="CT">Connecticut</option>
                  <option id="DE">Delaware</option>
                  <option id="DC">District of Columbia</option>
                  <option id="FL">Florida</option>
                  <option id="GA">Georgia</option>
                  <option id="HI">Hawaii</option>
                  <option id="ID">Idaho</option>
                  <option id="IL">Illinois</option>
                  <option id="IN">Indiana</option>
                  <option id="IA">Iowa</option>
                  <option id="KS">Kansas</option>
                  <option id="KY">Kentucky</option>
                  <option id="LA">Louisiana</option>
                  <option id="ME">Maine</option>
                  <option id="MD">Maryland</option>
                  <option id="MA">Massachusetts</option>
                  <option id="MI">Michigan</option>
                  <option id="MN">Minnesota</option>
                  <option id="MS">Mississippi</option>
                  <option id="MO">Missouri</option>
                  <option id="MT">Montana</option>
                  <option id="NE">Nebraska</option>
                  <option id="NV">Nevada</option>
                  <option id="NH">New Hampshire</option>
                  <option id="NJ">New Jersey</option>
                  <option id="NM">New Mexico</option>
                  <option id="NY">New York</option>
                  <option id="NC">North Carolina</option>
                  <option id="ND">North Dakota</option>
                  <option id="OH">Ohio</option>
                  <option id="OK">Oklahoma</option>
                  <option id="OR">Oregon</option>
                  <option id="PA">Pennsylvania</option>
                  <option id="RI">Rhode Island</option>
                  <option id="SC">South Carolina</option>
                  <option id="SD">South Dakota</option>
                  <option id="TN">Tennessee</option>
                  <option id="TX">Texas</option>
                  <option id="UT">Utah</option>
                  <option id="VT">Vermont</option>
                  <option id="VT">Virginia</option>
                  <option id="WA">Washington</option>
                  <option id="WV">West Virginia</option>
                  <option id="WI">Wisconsin</option>
                  <option id="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label></Form.Label>
                <Form.Control
                  placeholder="Zip Code"
                  onChange={(e) => setZipCodeValue(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <div id="verification">
            <h3 id="verification-header">Voting Verification</h3>
            <h6>Please click 'PSWD' to generate password</h6>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <Button variant="dark">PSWD</Button>
              </InputGroup.Prepend>
              <FormControl className="pswd-form" aria-describedby="basic-addon1" />
            </InputGroup>
            <br />

            <ButtonGroup size="lg" className="mr-3">
              <Button href="/" onClick={() => { submitBtn() }} variant="dark"
                type="submit" id='right-button'>Go Back</Button>
            </ButtonGroup>

            <ButtonGroup size="lg" className="mr-3">
              <Button onClick={() => { submitBtn() }} variant="dark"
                type="submit" id='left-button'>Sign Up</Button>
            </ButtonGroup>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
};

// export component from SignUp.jsx
export default SignUp;
