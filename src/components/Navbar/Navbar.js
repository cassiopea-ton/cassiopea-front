import React from 'react';
import Home from '../../containers/Home/Home';
import OracleInfo from '../../containers/OracleInfo/OracleInfo';
import Statistics from '../../containers/Statistics/Statistics';
import ConsumerInfo from '../../containers/ConsumerInfo/ConsumerInfo';
import {  BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import './Navbar.scss' ;

function Navbar() {
  return (
    <Router>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stats" component={Statistics} />
          <Route  path="/howto/oracle" component={OracleInfo} />
          <Route path="/howto/consumer" component={ConsumerInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
