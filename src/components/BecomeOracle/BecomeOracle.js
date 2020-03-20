import React from "react";
import "./BecomeOracle.scss";
import InfoContainer from "../InfoContainer/InfoContainer";
// import networkAlt from './img/networkAlt.png';
const oracleArticle = "Ready to become an Oracle!";

const top =
  "Do you trully belive in decentralization? Want to be a part of decentralized anonimus organization and make profit? That is an oportunity for you.";

const element =
  "Intall provider util or code your own, register as an oracle on smart contract and resend data from Internet to Telegram Open Network. Be rewarded as soon as someone requests your data. Sounds easy, right?";

const colorStyle = {
  color: "#6882A1"
};

const BecomeOracle = () => (
  <div className="provider__wrapper">
    <InfoContainer
      top={top}
      element={element}
      position="left"
      text={oracleArticle}
      color={colorStyle}
      content="Become Oracle"
      path="/cassiopea-front/howto/oracle"
    />
  </div>
);

export default BecomeOracle;
