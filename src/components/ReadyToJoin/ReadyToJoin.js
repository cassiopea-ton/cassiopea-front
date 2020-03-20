import React from "react";
import "./ReadyToJoin.scss";
import RequestContent from "../RequestContent/RequestContent";

const ReadyToJoin = props => (
  <div>
    <h3 className="wrapper__article">Ready to join?</h3>
    <div className="ready__to__join__wrapper">
      <RequestContent content="Request data!" path="/howto/consumer" />
      <RequestContent content="Be an Oracle!" path="/howto/oracle" />
    </div>
  </div>
);

export default ReadyToJoin;
