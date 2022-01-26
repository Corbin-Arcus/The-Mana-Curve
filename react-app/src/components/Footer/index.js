import React from "react";
import { FooterContainer } from '../styles/footer.styled'

function Footer() {
  return (
    <FooterContainer>
      <h1>My Socials:</h1>
      <i class="fab fa-github"></i>
      <a href='https://github.com/Corbin-Arcus'>Github</a>
      <i class="fab fa-linkedin"></i>
      <a href='https://www.linkedin.com/in/corbin-arcus-23621121a/'>Linkedin</a>
    </FooterContainer>
  );
}

export default Footer;
