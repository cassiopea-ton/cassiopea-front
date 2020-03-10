
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Router } from 'react-router-dom';
import Routes from '../../routes/Routes';
import { createBrowserHistory } from 'history';


import './App.scss';

export const history = createBrowserHistory();



const  App = () => (
  <Router history={history}>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );


export default App;
