
import React from 'react';
import Header from '../../components/Header/Header';
import HomeStatInfo from '../../components/HomeStatInfo/HomeStatInfo';
import NeedData from '../../components/NeedData/NeedData';
import Footer from '../../components/Footer/Footer';
import { Router } from 'react-router-dom';
import Routes from '../../routes/Routes';
import { createBrowserHistory } from 'history';


import './App.scss';

export const history = createBrowserHistory();



const  App = () => (
  <Router history={history}>
      <Header />
      <HomeStatInfo />
      <NeedData />

      <Routes />
      <Footer />
    </Router>
  );


export default App;
