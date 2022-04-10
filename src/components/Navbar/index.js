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
                <NavLogo onClick={toggle} to='/'>NetCounsel</NavLogo>
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
                        <NavLinks to="signup">Signup</NavLinks>
                    </NavItem>
                    <NavBtn>
                    <NavBtnLink to="/signin" >Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
  
    </>
  )
}

export default Navbar;