import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Polygon from '../../components/Polygon/Polygon';
import './Header.scss';

const  Header = () =>
      <header className="page__header">
        <Navbar />
        <Polygon />
      </header>

export default Header;
