import React, { useState } from "react";
import { Container, Button, Row, Col, Label } from "reactstrap";
import Input from "./../../components/UI/Input/Input.index";
import { Form, FormGroup } from "react-bootstrap";
import "./login.styles.css";
import logo from "../../assets/images/logo.png";
import { connect } from "react-redux";
import { loginUser } from "../../redux/person/person.actions";


function LoginScreen(props) {
  
  const [formValue,setFormValue]=useState({email:'',password:'',})

  function formSubmit(e){
    e.preventDefault();
    props.loginUser({email:formValue.email,password:formValue.password});
    console.log("Form Submit...");
  }

  function handleChange(e){
    let name=e.target.name
    console.log("NAME:",e.target.name,"VALUE:",e.target.value);
    setFormValue({...formValue,[name]:e.target.value});
  }

  return (
    <Container className="login__container">
      <div>
        {console.log("FORMVALUE:",formValue)}
        <img
          className="logo__image"
          src={logo}
          alt="Logo"
          width="160"
          height="60"
        />
        <div className="card login-form">
          <div className="card-body">
            <div className="card-text">
              <Form className=".form" onSubmit={formSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <input
                    id="input__username"
                    className="common"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    required="true"
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Password</Label>
                  <input
                    id="input__username"
                    className="common"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    id="email"
                    required="true"
                    onChange={handleChange}
                  />
                </FormGroup>

                <button type="submit" class="btn btn-primary btn-block">
                  Sign in
                </button>

                <a className="forget__link" href="#">
                  Forget Password?
                </a>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default connect(null,{
  loginUser
})(LoginScreen);
