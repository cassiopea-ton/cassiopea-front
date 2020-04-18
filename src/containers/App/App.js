import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Routes from "../../routes/Routes";
import * as actions from '../../store/actions'
import "./App.scss";

export const history = createBrowserHistory();

const App = ({requestTonClientData}) => {
 
  useEffect(()=>{
    requestTonClientData();
  });

  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes  />
      <Footer />
    </Router>
  );
}

const mapDispatchToProp = dispatch => bindActionCreators({
  requestTonClientData: actions.tonClientRequestData
}, dispatch);

export default connect(()=>({}),mapDispatchToProp)(App);