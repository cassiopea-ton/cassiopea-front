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
     appClient: new TONClient({
      servers: ["https://testnet.ton.dev"],
      transactionTimeout: 30000,
     })
   }
  }
  //   (async function joi() {
  //     const client = await TONClient.create({
  //       servers: ["https://testnet.ton.dev"],
  //       transactionTimeout: 30000,
  //     });
  //     return client;
  //   }).then(client => {
  //     this.state = {
  //       appClient: client
  //     }
  //   })
  // }
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
