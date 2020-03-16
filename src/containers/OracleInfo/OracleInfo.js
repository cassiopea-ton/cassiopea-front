import React from "react";
import "./OracleInfo.scss";
import HowToUse from "../../components/HowToUse/HowToUse";
import RequestAnOraclePolygon from "../../components/RequestAnOraclePolygon/RequestAnOraclePolygon";
import ProvidersSearch from "../../components/ProvidersSearch/ProvidersSearch";

const OracleInfo = () => (
   <div className="oracle__request">
      <RequestAnOraclePolygon />
      <HowToUse />   
      <ProvidersSearch />
  </div>
);
export default OracleInfo;
