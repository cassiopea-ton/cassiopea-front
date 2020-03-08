import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import FooterMenu from '../FooterMenu/FooterMenu';
import './Footer.scss';

const Footer = () => 
    <footer className="footer">
      <div className="container">
        <h3 className="footer__article">Not ready  to start now? Keep in touch!</h3>
        <SubscribeForm />
        <FooterMenu />
      </div>
    </footer>

export default Footer;
