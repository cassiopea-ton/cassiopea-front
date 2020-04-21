import React from 'react';
import './RequestAnOraclePolygon.scss';
import polygons from './img/OraclePolygon1.png';

const Polygon =   () => (
  <div className="polygon__oracle">
    <img className="polygon__oracle_img" src={polygons} alt="polygon" />
    <div className="polygon__oracle_block">
      <p className="polygon__oracle_text">
        <span>Only one step left! Give wings to your smart contract! </span>
      </p>
    </div>
  </div>
);

export default Polygon;
