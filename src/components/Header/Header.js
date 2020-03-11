import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Header.scss';
import Polygon from '../../components/Polygon/Polygon';


const  Header = () =>
      <header className="page__header">
        <Navbar />
        <Polygon />   
      </header>

export default Header;
