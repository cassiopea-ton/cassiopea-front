import React from "react";
import "./ConsumerInfo.scss";
import HowToUse from "../../components/HowToUse/HowToUse";
import RequestAnOraclePolygon from "../../components/RequestAnOraclePolygon/RequestAnOraclePolygon";
import ProvidersSearch from "../../components/ProvidersSearch/ProvidersSearch";

const ConsumerInfo = () => {
  return (
    <div className="consumer">
      <RequestAnOraclePolygon />
      <HowToUse />
      <ProvidersSearch />
    </div>
  );
};

export default ConsumerInfo;
