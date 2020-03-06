import React from 'react';
import Home from '../Home/Home';
import OracleInfo from '../OracleInfo/OracleInfo';
import Statistics from '../Statistics/Statistics';
import ConsumerInfo from '../ConsumerInfo/ConsumerInfo';
import {  BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stats">Statistics</Link>
          </li>
          <li>
            <Link to="/howto/oracle">OracleInfo</Link>
          </li>
          <li>
            <Link to="/howto/consumer">ConsumerInfo</Link>
          </li>
        </ul>
        <hr />
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

export default App;
