import React from "react";
import "./ConsumerInfo.scss";
import HowToUse from "../../components/HowToUse/HowToUse";
import RequestAnOraclePolygon from "../../components/RequestAnOraclePolygon/RequestAnOraclePolygon";
import OracleSearchForm from "../../components/OracleSearchForm/OracleSearchForm";

const ConsumerInfo = () => {
  return (
    <div className="consumer">
      <RequestAnOraclePolygon />
      <HowToUse />
      <OracleSearchForm />
    </div>
  );
};

export default ConsumerInfo;
