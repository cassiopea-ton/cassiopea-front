import React from "react";
import { Link } from "react-router-dom";
import "./RequestButton.scss";

const RequestButton = (props) => {
  return (  
    <div className="request__button">
      <Link>{ props.content }</Link>
    </div>
  );
};

RequestButton.defaultProps = {
  content:"Request data!",
};

export default RequestButton;
