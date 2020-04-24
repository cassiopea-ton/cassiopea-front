import React from 'react';
import './FooterMenu.scss';
import {
  NavLink, Link, Switch, Route,
} from 'react-router-dom';

const FooterMenu = () => (

    <div className="footer__menu">
      <div className="footer__menu_column">
        <p className="menu__column_article" >
          Join
        </p>
        <ul className="menu__items_block">
          <div className="block__column col_l">
            <li>
              <Link className="column__item-" to="/cassiopea-front/be/oracle">
                Become a provider
              </Link>
            </li>
            <li>
              <NavLink className="column__item" to="/cassiopea-front/howto/consumer/">
                Request data
              </NavLink>
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
        <p className="menu__column_article">
          Learn more
        </p>
        <ul className="menu__items_block">
          <div className="block__column col_l">
            <li>
              <Link className="column__item" to="/github">
                Github
              </Link>
              <Link className="column__item" to="/medium">
                Medium
              </Link>
            </li>
          </div>
          <div className="block__column col_r">
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
          path="/howto/consumer"
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
);

export default FooterMenu;
