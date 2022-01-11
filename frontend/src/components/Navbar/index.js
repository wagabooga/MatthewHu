import React from 'react'
import { FaBars } from 'react-icons/fa' // check react-icons.github.io for more docs
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Matthew Hu</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">01. About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">02. Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">03. Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">04. Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
