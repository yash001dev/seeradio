import React, { useState } from "react";
import "./Header.styles.css";
import NavigationTop from "../NavigationTop/NavigationTop.index";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <NavigationTop />

      <div>
        <Navbar className="bottomNavigationbar" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard"
                >
                  <i className="fa fa-tachometer"></i>Dashboard
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fa fa-fire"></i>Campaigns
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/videoproduction"
                      >
                        Videos In Production
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>Campaigns In Market</DropdownItem>
                  <DropdownItem>Completed Campaigns</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/advertiser"
                >
                  <i className="fa fa-user"></i>Advertiser
                </NavLink>
              </NavItem>
              <NavItem className="orderNavItem">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/order"
                >
                  <i className="fa fa-plus"></i>Order
                </NavLink>
              </NavItem>
              {/* <NavItem className="orderNavItem">
                                <NavLink className='nav-link' activeClassName='active' to="/resetpassword"><i className="fa fa-user"></i>Change Password</NavLink>
                            </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
