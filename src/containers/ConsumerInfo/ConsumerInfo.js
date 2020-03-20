import React from "react";
import "./ConsumerInfo.scss";
import HowToUse from "../../components/HowToUse/HowToUse";
import RequestAnOraclePolygon from "../../components/RequestAnOraclePolygon/RequestAnOraclePolygon";
import OracleSearchForm from "../../components/OracleSearchForm/OracleSearchForm";

const ConsumerInfo = (props) => {

  const { client } = props;

  return (
    <div className="consumer">
      <RequestAnOraclePolygon />
      <HowToUse />
      <OracleSearchForm tonClient={client}  />
    </div>
  );
};

export default ConsumerInfo;
