import React from 'react';
import './BeOracle.scss';
import BeOraclePolygon from '../../components/BeOraclePage/BeOraclePolygon/BeOraclePolygon';
import BeOracleInfo from '../../components/BeOraclePage/BeOracleInfo/BeOracleInfo';

const BeOracle = () => (
  <div className="become__oracle__container">
    <BeOraclePolygon />
    <BeOracleInfo />
  </div>
);
export default BeOracle;
