import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './header-logo.png';
import './Navbar.scss';


const Navbar = () => {
  const [menuClass, setMenuClass] = useState(true);
  const navHandler = () => {
    setMenuClass(!menuClass);
  };

  return (
    <div className="nav__container">
      <div className="nav">
        <Link to="/cassiopea-front/">
          <img src={logo} alt="logo" className="nav__logo" />
        </Link>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__item__link" to="/cassiopea-front/">
              About Us
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/cassiopea-front/stats">
              Statistics
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              to="/cassiopea-front/howto/oracle"
            >
              Oracle Instruction
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/cassiopea-front/be/oracle">
              Be An Oracle
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              to="/cassiopea-front/howto/consumer"
            >
              Request Oracles
            </Link>
          </li>
        </ul>
      </div>
      <div
        role="menuitem"
        className={menuClass ? 'gamburger' : 'gamburger gmb__cross'}
        onClick={navHandler}
        onKeyDown={navHandler}
        tabIndex={0}
      >
        <span className={menuClass ? '' : 'first'} />
        <span className={menuClass ? '' : 'middle'} />
        <span className={menuClass ? '' : 'last'} />
      </div>
      <div className={menuClass ? 'menu__mobile' : 'menu__mobile menu-active'}>
        <ul className="menu">
          <li className="menu__item">
            <Link
              className="menu__item__link"
              onClick={navHandler}
              to="/cassiopea-front/"
            >
              About Us
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              onClick={navHandler}
              to="/cassiopea-front/stats"
            >
              Statistics
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              onClick={navHandler}
              to="/cassiopea-front/howto/oracle"
            >
              Oracle Instruction
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              onClick={navHandler}
              to="/cassiopea-front/be/oracle"
            >
              Be An Oracle
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__item__link"
              onClick={navHandler}
              to="/cassiopea-front/howto/consumer"
            >
              Request Oracles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
