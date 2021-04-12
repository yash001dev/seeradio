import React, { useState } from "react";
import FloatingInput from "../../components/UI/FloatingInput/FloatingInput.index";
import "./login.styles.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import logo from "../../assets/images/logo.png";
import { Button } from "reactstrap";
// import Spinner from '../../Shared/Spinner/Spinner';
// import BackDrop from '../../Shared/Backdrop/Backdrop';
// import { login } from '../../Api/Api';
import LoginFields from "../../constant/login.constant";
import useLogin from "./useLogin";
import LoginValidation from "./Login.validate";
import { loginUser } from "../../redux/person/person.actions";

const Login = (props) => {
  const { email, password } = LoginFields;
  const customData = useLogin(LoginValidation, props.loginUser, props.history,props.loginStatus);

  return (
    <>
      {/* <BackDrop show={isLoading} ><Spinner/></BackDrop> */}
      <div className="background">
        <div className="loginBox w-100 mx-auto">
          <div className="imageBox">
            <img alt="Logo" src={logo} />
          </div>
          <div className="formBox">
            <form onSubmit={customData.handleSubmit}>
              <FloatingInput
                classes="border-top-0 border-left-0 border-right-0 border-bottom rounded-0"
                onChange={customData.handleChange}
                value={customData.values.email}
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email"
                id="emailfloatingInput"
                for="floatingInput"
              />
              <FloatingInput
                classes="border-top-0 border-left-0 border-right-0 rounded-0"
                autoComplete="cc-csc"
                onChange={customData.handleChange}
                value={customData.values.password} 
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                id="passwordfloatingInput"
                for="floatingInput"
              />
              <Button
                color="primary"
                type="submit"
                className="loginButton"
              >
                Login
              </Button>
            </form>
            <div className="text-center">
              <Button color="link" className="forgotPasswordButton">
                Forgot password?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state)=>{
  return{
    loginStatus:state.person.isLogged
  }
}

export default connect(mapStateToProps, {loginUser})(Login);
