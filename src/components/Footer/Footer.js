import React from 'react';
import FooterSubmit from '../FooterSubmit/FooterSubmit';
import FooterMenu from '../FooterMenu/FooterMenu';
import './Footer.scss';

const Footer = () => 
    <footer>
      <h3 className="footer__article">Not ready  to start now? Keep in touch!</h3>
      <FooterSubmit />
      <FooterMenu />
    </footer>


export default Footer;
