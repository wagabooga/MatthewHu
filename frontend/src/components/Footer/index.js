import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { 
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialLogo, 
  WebsiteRights, 
  SocialIcons, 
  SocialIconLink } from './FooterElements'
  import { animateScroll as scroll} from 'react-scroll'
const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
                <FooterLink to="/signin">Email</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Matthew Hu
            </SocialLogo>
            <WebsiteRights>Matthew Hu © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.github.com/wagabooga" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/wagabooga/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              {/* <SocialIconLink href="//www.twitter.com/wagabooga" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
