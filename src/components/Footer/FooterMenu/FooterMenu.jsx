import React from 'react';
import './FooterMenu.scss';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

const FooterMenu = () => (
  <Router>
    <div className="footer__menu">
      <div className="footer__menu_column">
        <Link className="menu__column_article" to="cassiopeia/front">
          Join
        </Link>
        <ul className="menu__items__block">
          <div className="block__column col_l">
            <li>
              <Link className="column__item" to="/cassiopeia/front">
                Become a provider
              </Link>
            </li>
            <li>
              <Link className="column__item" to="cassiopeia/front">
                Request data
              </Link>
            </li>
          </div>
          <div className="block__column col_r">
            <li>
              <Link className="column__item" to="cassiopeia/front">
                Subscribe
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="footer__menu_column">
        <Link className="menu__column_article" to="cassiopeia/front">
          Learn more
        </Link>
        <ul className="menu__items_block">
          <div className="block__column col_l">
            <li>
              <Link className="column__item" to="cassiopeia/fron">
                Provider instruction
              </Link>
            </li>
            <li>
              <Link className="column__item" to="/github">
                Github
              </Link>
            </li>
          </div>
          <div className="block__column col_r">
            <li>
              <Link className="column__item" to="/medium">
                Medium
              </Link>
            </li>
            <li>
              <Link className="column__item" to="/twitter">
                Twitter
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <Switch>
        <Route
          path="#"
          component={() => {
            window.location = 'https://github.com/cassiopea-ton';
            return null;
          }}
        />
        <Route
          path="/github"
          component={() => {
            window.location = 'https://github.com/cassiopea-ton';
            return null;
          }}
        />
        <Route
          path="/medium"
          component={() => {
            window.location = 'https://medium.com/@cassiopeiablockchain';
            return null;
          }}
        />
        <Route
          path="/twitter"
          component={() => {
            window.location = 'https://twitter.com/CassiopeiaTon';
            return null;
          }}
        />
      </Switch>
    </div>
  </Router>
);

export default FooterMenu;
