import React from 'react'
import {FaBars} from 'react-icons/fa'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem,
        NavBtn, NavBtnLink} from './NavbarElements'



const Navbar = ({toggle}) => {
  return (
    <>


        <Nav>

            <NavbarContainer>
                <NavLogo to='/'>NetCounsel</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks  to="about" >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="admin">Admin Login</NavLinks>
                    </NavItem>
                    <NavBtn>
                    <NavBtnLink to="/signup" >Sign Up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
  
    </>
  )
}

export default Navbar;