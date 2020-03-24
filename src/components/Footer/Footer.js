import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import FooterMenu from '../FooterMenu/FooterMenu';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
      <div className="container">
        <SubscribeForm />
        <FooterMenu />
      </div>
    </footer>
);

export default Footer;
