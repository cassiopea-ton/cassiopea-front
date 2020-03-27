import React from "react";
import "./NeedData.scss";
import InfoContainer from "../../InfoContainer/InfoContainer";
import data from "./img/needData.png";

const needDataArticle = "Need data? Just request!";

const top =
  "Cassiopeia is a market place for DAPP developers and crypto-anarchists who ready to become data providers. The platform connects two widest and wildest worlds: Internet and Telegram Open Network. You are in the right place if you either need real-world data from decentralized providers for your smart contract or look for the opportunity to profit by sending it";

const element =
  "As DAPP developer you should be certain in what your smart contract consume. Don’t rely on single source, chose only confirmed information. ";

const NeedData = () => (
  <div className="data__request">
    <div classsName="data__request__img__container">
      <img src={data} alt="data" />
    </div>
    <InfoContainer
      top={top}
      element={element}
      position="right"
      text={needDataArticle}
      content="Request Data"
      path="/howto/consumer"
    />
  </div>
);

export default NeedData;
