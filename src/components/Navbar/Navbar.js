import React from "react";
import { Link } from "react-router-dom";
import logo from "./header-logo.png";
import "./Navbar.scss";

const Navbar = () => (
  <div className="nav">
    <Link>
      {" "}
      <img src={logo} alt={"logo"} className="nav__logo" />
    </Link>
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link" to="/">
          About Us
        </Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/stats">
          Statistics
        </Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/howto/oracle">
          Oracle Instruction
        </Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/howto/consumer">
          Be An Oracle
        </Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/howto/consumer">
          Request Oracles
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
