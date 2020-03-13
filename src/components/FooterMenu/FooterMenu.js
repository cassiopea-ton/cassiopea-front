import React from "react";
import "./FooterMenu.scss";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const FooterMenu = () => (
  <Router>
    <div className="footer__menu">
      <div className="footer_column">
        <Link className="column__article" to="#">
          Join
        </Link>
        <ul>
          <li>
            <Link className="column__items" to="#">
              Become a provider
            </Link>
          </li>
          <Link className="column__items" to="#">
            Request data
          </Link>
          <li>
            <Link className="column__items" to="#">
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <Link className="column__article" to="#">
          Learn more
        </Link>
        <ul>
          <li>
            <Link className="" to="#">
              Provider instruction
            </Link>
          </li>
          <li>
            <Link className="column__items" to="/github">
              Github
            </Link>
          </li>
          <li>
            <Link className="column__items" to="/medium">
              Medium
            </Link>
          </li>
          <li>
            <Link className="column__items" to="/twitter">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
      <Route
          path="#"
          component={() => {
            window.location = "https://github.com/cassiopea-ton";
            return null;
          }}
        />
         <Route
          path="/github"
          component={() => {
            window.location = "https://github.com/cassiopea-ton";
            return null;
          }}
        />
          <Route
          path="/medium"
          component={() => {
            window.location = "https://medium.com/@cassiopeiablockchain";
            return null;
          }}
        />
           <Route
          path="/twitter"
          component={() => {
            window.location = "https://twitter.com/CassiopeiaTon";
            return null;
          }}
        />
      </Switch>
    </div>
  </Router>
);

export default FooterMenu;
