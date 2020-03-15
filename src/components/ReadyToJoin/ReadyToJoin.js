import React from "react";
import "./ReadyToJoin.scss";
import RequestContent from "../RequestContent/RequestContent";

const ReadyToJoin = props => (
  <div  >
    <h3 className="wrapper__article">Ready to join?</h3>
    <div className="ready__to__join__wrapper">
      <RequestContent content="Request data!" />
      <RequestContent content="Be an Oracle!" />
    </div>
  </div>
);

export default ReadyToJoin;
