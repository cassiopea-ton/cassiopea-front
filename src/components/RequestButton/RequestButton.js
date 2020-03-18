import React from "react";
import { Link } from "react-router-dom";
import "./RequestButton.scss";

const RequestButton = props => {
  return (
    <div className={props.class_name} style={props.buttonColor}>
      <Link onClick={props.onClick} to={props.path}>{props.content}</Link>
    </div>
  );
};

RequestButton.defaultProps = {
  content: "Request data!",
  class_name: "request__button",
  buttonColor: {
  backgroundColor: "#b60002"
  }
};

export default RequestButton;
