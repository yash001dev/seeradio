import React from "react";
import { Navbar, Nav,Container } from "react-bootstrap";
import {NavLink,Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {BsBellFill} from 'react-icons/bs';
function Header() {
  return (
    <Navbar>
  <Navbar.Brand href="#home">
       <img className="logo__image" src={logo} alt="Logo" width="160" height="60" /> 
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Nav className="justify-content-end">
      <div className="navbar__text">
          <BsBellFill/>
        <div className="avatar-circle">
            
            <span className="initials">
                YS
            </span>
        </div>
      </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Header;