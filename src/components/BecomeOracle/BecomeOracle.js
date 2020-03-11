import React from 'react';
import './BecomeOracle.scss';
import InfoContainer from '../InfoContainer/InfoContainer';
// import networkAlt from './img/networkAlt.png';
const oracleArticle = 'Ready to become an Oracle!';

const  BecomeOracle = () =>
    <div className="provider__wrapper">
        
         {/*
         
         // Another variant to add img like a common image -- fix required

          <img src={networkAlt} alt="network" />
          
          */}
        <InfoContainer position='left' text={oracleArticle} />
    </div>

export default BecomeOracle;
