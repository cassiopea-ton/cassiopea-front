import React from 'react';
import ConsumerInfo from '../containers/ConsumerInfo/ConsumerInfo';
import OracleInfo from '../containers/OracleInfo/OracleInfo';
import Statistics from '../containers/Statistics/Statistics';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import routePaths from './routePath';
import './routes.scss';



const Routes = () => (
    <section className="wrapper">
       <Switch>
        <Route exact path={routePaths.homePage()} component={Home} />
        <Route path={routePaths.statistics()} component={Statistics} />
        <Route path={routePaths.oracleInfo()} component={OracleInfo} />
        <Route path={routePaths.consumerInfo()} component={ConsumerInfo} />
    </Switch>
    </section>
);

export default Routes;
