import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper,SidebarLink, SidebarMenu, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink onClick={toggle} to="/">
                   Home
                </SidebarLink>
                <SidebarLink to="/explore" onClick={toggle}>
                  Explore Now
                </SidebarLink>
                <SidebarLink to="/request" onClick={toggle}>
                    Account Request
                </SidebarLink>
                {/* <SidebarLink to="/" onClick={toggle}>
                    Contact Us
                </SidebarLink> */}

                
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login' onClick={toggle}>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
                
        </SidebarContainer>




  )
}

export default Sidebar;