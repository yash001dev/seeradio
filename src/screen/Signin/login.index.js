import React from "react";
import { Container, Button, Row, Col, Label } from "reactstrap";
import Input from "./../../components/UI/Input/Input.index";
import { Form, FormGroup } from 'react-bootstrap';
import './login.styles.css';
import logo from '../../assets/images/logo.png';


function LoginScreen() {
  return (
    <Container >
      <div>
      <img className="logo__image" src={logo} alt="Logo" width="160" height="60" /> 
      <div className="card login-form">
        <div className="card-body">
          <div className="card-text">
            <Form className=".form">
                <FormGroup>
                <Label for="email" >Email</Label>
                <input id="input__username" name="username" type="text" placeholder="Enter email" id="email"  required="true" />
                </FormGroup>

                <FormGroup>
                <Label for="email">Password</Label>
                <input id="input__username" name="username" type="password" placeholder="Enter password" id="email"  required="true" />
                </FormGroup>

                	<button type="submit" class="btn btn-primary btn-block">Sign in</button>

                  <a className="forget__link" href="#">Forget Password?</a>
            </Form>
          </div>

        </div>
      </div>
      </div>
    </Container>
  );
}

export default LoginScreen;
