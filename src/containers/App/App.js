import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Router } from "react-router-dom";
import Routes from "../../routes/Routes";
import { createBrowserHistory } from "history";
import "./App.scss";
import { TONClient } from "ton-client-web-js";

export const history = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AppClient: null
    };
  }
  initClient = () =>
    this.state
      .setState(AppClient => {
        TONClient.create({
          servers: ["test.ton.org/testnet"],
          transactionTimeout: 30000
        });
      })
      .then(client => {
        this.state.setState({ AppClient: client });
      });

  render() {
    return (
      <Router history={history}>
        <Header />
        <Routes tonClient={this.state.AppClient} />
        <Footer />
      </Router>
    );
  }
}
