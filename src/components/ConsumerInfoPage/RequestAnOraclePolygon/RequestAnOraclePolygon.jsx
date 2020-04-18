import React from 'react';
import './RequestAnOraclePolygon.scss';
import polygon from './img/OraclePolygon.png';

const Polygon = () => (
  <div className="polygon__oracle">
    <img className="polygon__oracle__img" src={polygon} alt="polygon" />
    <div className="polygon__oracle__block">
      <p className="polygon__oracle__text">
        <span>Only one step left! Give wings to your smart contract! </span>
      </p>
    </div>
  </div>
);

export default Polygon;
