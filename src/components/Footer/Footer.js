import React from 'react';
import SubscribeForm from '../Footer/SubscribeForm/SubscribeForm';
import FooterMenu from '../Footer/FooterMenu/FooterMenu';
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
