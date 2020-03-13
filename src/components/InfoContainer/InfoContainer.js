import React from "react";
import "./InfoContainer.scss";
import GenInfo from "../GenInfo/GenInfo";
import RequestButton from "../RequestButton/RequestButton";
import TransparentButton from "../TransparentButton/TransparentButton";
import PropTypes from "prop-types";

const InfoContainer = props => (
  <div className={`info__wrapper ${props.position}`}>
    <h3 className="wrapper__article">{props.text}</h3>
    <GenInfo />
    <RequestButton />
    <TransparentButton />
  </div>
);

InfoContainer.propTypes = {
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};


export default InfoContainer;
