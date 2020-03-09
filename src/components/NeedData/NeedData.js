import React from 'react';
import './NeedData.scss';
import InfoContainer from '../InfoContainer/InfoContainer';


import data from './img/needData.png';

const NeedData = () =>  
  <div className="data__request">
      <img src={data} alt="data" />
      <InfoContainer />
  </div>
     
export default NeedData;
