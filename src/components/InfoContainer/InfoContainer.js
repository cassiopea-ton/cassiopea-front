import React from "react";
import "./InfoContainer.scss";
import GenInfo from "../GenInfo/GenInfo";
import RequestButton from "../RequestButton/RequestButton";
import TransparentButton from "../TransparentButton/TransparentButton";
import PropTypes from "prop-types";



const InfoContainer = (props) => {
  const { position, text , content, top, element, colorStyle } = props;
  return (
    <div className={`info__wrapper ${position}`}>
      <h3 className="wrapper__article">{text}</h3>
      <GenInfo color={colorStyle} top={top} element={element}/>
      <RequestButton content={content} path={props.path} />
      <TransparentButton path="/cassiopea-front/stats" />
    </div>
  );
};
InfoContainer.propTypes = {
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default InfoContainer;
