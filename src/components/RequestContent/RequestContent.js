import React from "react";
import "./RequestContent.scss";
import RequestButton from "../RequestButton/RequestButton";
import PropTypes from "prop-types";

const RequestContent = props => (
  <div className="wrapper__container">
    <p>Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu.</p>
    <RequestButton content={props.content} path={props.path} />
  </div>
);

RequestContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RequestContent;
