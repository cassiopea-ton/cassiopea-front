import React from 'react';
import './InfoContainer.scss';
import PropTypes from 'prop-types';
import GenInfo from '../GenInfo/GenInfo';
import RequestButton from '../RequestButton/RequestButton';
import TransparentButton from '../TransparentButton/TransparentButton';


const InfoContainer = ({
  position, text, content, top, element, colorStyle, path,
}) => {
  return (
    <div className={`info__wrapper ${position}`}>
      <h3 className="info__wrapper_article">{text}</h3>
      <GenInfo color={colorStyle} top={top} element={element} />
      <RequestButton content={content} path={path} />
      <TransparentButton path="/cassiopea-front/stats" />
    </div>
  );
};

InfoContainer.propTypes = {
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorStyle: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default InfoContainer;
