import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./header-logo.png";
import "./Navbar.scss";

const Navbar = props => {
  const [menuClass, setMenuClass] = useState(true);
  const navHandler = () => {
    setMenuClass(!menuClass);
  };

  return (
    <div className="nav__container">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt={"logo"} className="nav__logo" />
        </Link>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__item__link" to="/">
              About Us
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/stats">
              Statistics
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/howto/oracle">
              Oracle Instruction
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/be/oracle">
              Be An Oracle
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" to="/howto/consumer">
              Request Oracles
            </Link>
          </li>
        </ul>
      </div>
      <div className={menuClass ? "gamburger" : "gamburger gmb__cross"} onClick={navHandler}>
        <span className={menuClass ? "" : "first"}></span>
        <span className={menuClass ? "" : "middle"}></span>
        <span className={menuClass ? "" : "last"}></span>
      </div>
      <div className={menuClass ? "menu__mobile" : "menu__mobile menu-active"}>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__item__link" onClick={navHandler} to="/">
              About Us
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" onClick={navHandler} to="/stats">
              Statistics
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" onClick={navHandler} to="/howto/oracle">
              Oracle Instruction
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" onClick={navHandler} to="/be/oracle">
              Be An Oracle
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__item__link" onClick={navHandler} to="/howto/consumer">
              Request Oracles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
