import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Router } from "react-router-dom";
import Routes from "../../routes/Routes";
import { createBrowserHistory } from "history";
import "./App.scss";
const { TONClient } = require("ton-client-node-js");
export const history = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
     appClient: new TONClient()
   }
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Routes tonClient={this.state.appClient} />
        <Footer />
      </Router>
    );
  }
}
