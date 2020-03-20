import React from "react";
import "./BeOracle.scss";
import BeOraclePolygon from "../../components/BeOraclePolygon/BeOraclePolygon";
import BeOracleInfo from "../../components/BeOracleInfo/BeOracleInfo";

const BeOracle = (props) => (
   <div className="become__oracle__container">
       <BeOraclePolygon />
       <BeOracleInfo />
  </div>
);  
export default BeOracle;
