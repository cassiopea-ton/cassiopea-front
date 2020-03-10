import React from 'react';
import './InfoContainer.scss' ;
import GenInfo from '../GenInfo/GenInfo';
import RequestButton from '../RequestButton/RequestButton';
import TransparentButton from '../TransparentButton/TransparentButton';



const InfoContainer = () =>
      <div className="info__wrapper" >
        <h3 className="wrapper__article">Need data? Just request!</h3>
        <GenInfo />
        <RequestButton />
         <TransparentButton />
      </div>

export default InfoContainer;
