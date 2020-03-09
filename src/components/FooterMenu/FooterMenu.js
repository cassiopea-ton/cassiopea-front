import React from 'react';
import './FooterMenu.scss';
import { Link, BrowserRouter as Router,Switch, Route } from 'react-router-dom';

const  FooterMenu= () =>
<Router>
<div className="footer__menu">

    <div className="footer_column">
      <Link className="column__article" to="#">Join</Link>
        <ul>
          <li>
          <Link className="column__items" to="#">Become a provider</Link></li>
          <Link className="column__items" to="#">Request data</Link>
          <li>
          <Link className="column__items" to="#">Subscribe</Link></li>
        </ul>
    </div>
    <div className="footer_column">
      <Link className="column__article" to="#">Learn more</Link>
        <ul>
          <li><Link className="" to="#">Provider instruction</Link></li>
          <li><Link className="column__items" to="#">Github</Link></li>
          <li><Link className="column__items" to="#">Medium</Link></li>
          <li><Link className="column__items" to="#">Twitter</Link></li>
        </ul>
    </div>
    <Switch>
          <Route exact path="/"  />
          <Route path="/stats" />
          <Route  path="/howto/oracle" />
          <Route path="/howto/consumer"  />
    </Switch>
</div>
</Router> 


export default FooterMenu;
