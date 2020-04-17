import React from "react";
import "./RequestContent.scss";
import RequestButton from "../RequestButton/RequestButton";
import PropTypes from "prop-types";

const RequestContent = props => (
  <div className="wrapper__container">
    <p>{props.text}</p>
    <RequestButton content={props.content} path={props.path} />
  </div>
);

RequestContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RequestContent;
