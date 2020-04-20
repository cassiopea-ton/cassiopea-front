import React from 'react';
import './HowToUse.scss';
import howTo from './img/howToUse.png';

const HowToUse = () => (
  <div className="how__to__cointainer">
    <div className="container ">
      <h1 className="container__article howto__article">
        How to use an oracle?
      </h1>
      <p className="container__text cons">
        Oracles are the data providers for decentralized applications. All you
        need to use the real-world data is over here. Fill in requirements,
        press the button and let`s go!
      </p>
      <p className="container__text cons">
        Our search engine will try to find all the providers that matches your
        needs. Send request to them from your wallet and the data will be
        immediately sent to your application.
      </p>
    </div>
    <div className="container__img">
      <img src={howTo} alt="howTo.jpg" />
    </div>
  </div>
);

export default HowToUse;
