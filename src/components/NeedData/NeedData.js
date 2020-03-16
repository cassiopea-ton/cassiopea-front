import React from "react";
import "./NeedData.scss";
import InfoContainer from "../InfoContainer/InfoContainer";
import data from "./img/needData.png";

const needDataArticle = "Need data? Just request!";

const NeedData = () => (
  <div className="data__request">
    <img src={data} alt="data" />
    <InfoContainer position="right" text={needDataArticle} content ="Request Data" />
  </div>
);

export default NeedData;
