import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa' // check react-icons.github.io for more docs
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { IconContext } from 'react-icons/lib'


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  // this is to change the color of the nav when scrolling

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{color: '#000'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onclick={toggleHome}>Matthew Hu</NavLogo>
          <MobileIcon onClick={toggle}>
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
              <NavLinks to="contact">04. Contact</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">sign in</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
