import React from 'react';
import { Link,} from "react-router-dom";
import './Navbar.scss' ;

function Navbar() {
  return (
      <div className="nav" >
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/stats">Statistics</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/howto/oracle">OracleInfo</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/howto/consumer">ConsumerInfo</Link>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;
