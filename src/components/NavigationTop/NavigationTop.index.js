import React, { useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import './NavigationTop.styles.css';
import bell from '../../assets/images/bell.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


function NavigationTop(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
        console.log("Toggle is Called...");
        setDropdownOpen(prevState => !prevState)
        return;
    };
    return (
        <div className='topNavigation'>
            <div className="logoDiv">
                <img alt="logo" className="logo-area" src={logo} />
            </div>
            <div className='circleButtonDiv'>
                <div>
                    <img alt='"bell' src={bell} className='bellSvg' />
                </div>
                <div className='butoonDropDown'>
                    <Button className='circleButton'>{props.firstName[0] + props.lastName[0]}</Button>

                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle
                            tag="span"
                            data-toggle="dropdown"
                            aria-expanded={dropdownOpen}
                        >
                            <i class="fa fa-chevron-down" style={{ color: 'black',height:'20px' }} ></i>
                        </DropdownToggle>
                        <DropdownMenu className='navTopDropdown'>
                            <DropdownItem>
                                <NavItem>
                                    <NavLink className='nav-link' activeClassName='active' to="/profile">
                                    <i class="fa fa-user mr-2" style={{color:'white'}}></i>Profile</NavLink>
                                </NavItem> 
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem>
                                    <NavLink className='nav-link' activeClassName='active' to="/changePassword">
                                    <i class="fa fa-lock mr-2"></i>Change Password</NavLink>
                                </NavItem> 
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem>
                                    <NavLink className='nav-link' activeClassName='active' to='/signOut'>
                                    <i class="fa fa-sign-out mr-2"></i>SignOut</NavLink>
                                </NavItem> 
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div>
                    <p className='text-primary role m-0'>{props.role}</p>
                    <p className='email m-0'>{props.email}</p>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        firstName: state.person.person.personData.firstName,
        lastName: state.person.person.personData.lastName,
        email: state.person.person.personData.email,
        role: state.person.person.personData.roleCode
    // }
    }
}

export default connect(mapStateToProps)(NavigationTop);

// export default NavigationTop