import React from 'react';
import './HomePolygon.scss';
import polygon from './img/Polygon.png';

const HomePolygon = () => (
  <div className="home-polygon">
    <img className="home-polygon__img" src={polygon} alt="polygon" />
    <div className="home-polygon__block">
      <h1 className="home-polygon__article">Cassiopeia</h1>
      <p className="home-polygon__text">
        <span />
Real-world data for your smart contracts.
        <span />
          Don’t limit your DAPP.
      </p>
    </div>
  </div>
);
export default HomePolygon;
