import React from "react";
import "./BecomeOracle.scss";
import InfoContainer from "../InfoContainer/InfoContainer";
// import networkAlt from './img/networkAlt.png';
const oracleArticle = "Ready to become an Oracle!";

const BecomeOracle = () => (
  <div className="provider__wrapper">
    <InfoContainer position="left" text={oracleArticle}  content="Become Oracle" />
  </div>
);

export default BecomeOracle;
