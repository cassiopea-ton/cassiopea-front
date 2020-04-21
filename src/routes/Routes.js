import React from "react";
import PropTypes from "prop-types";
import ConsumerInfo from "../containers/ConsumerInfo/ConsumerInfo";
import OracleInfo from "../containers/OracleInfo/OracleInfo";
import Statistics from "../containers/Statistics/Statistics";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import routePaths from "./routePath";
import "./routes.scss";
import BeOracle from "../containers/BeOracle/BeOracle";

const Routes = (props) => {
  const { tonClient } = props;

  return (
    <section className="wrapper">
      <Switch>
        <Route exact path={routePaths.homePage()} component={Home} />
        <Route
          path={routePaths.statistics()}
          render={(props) => <Statistics {...props} client={tonClient} />}
        />
        <Route path={routePaths.oracleInfo()} component={OracleInfo} />
        <Route path={routePaths.beOracle()} component={BeOracle} />
        <Route
          path={routePaths.consumerInfo()}
          render={(props) => <ConsumerInfo {...props} client={tonClient} />}
        />
      </Switch>
    </section>
  );
};

Routes.propTypes = {
  tonClient: PropTypes.object,
};

export default Routes;
