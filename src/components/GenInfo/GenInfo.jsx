import React from 'react';
import PropTypes from 'prop-types';
import './GenInfo.scss';

const GenInfo = ({ top, element, color }) => (
  <div className="info__block" style={{ color }}>
    <p className="info__element top">{top}</p>
    <p className="info__element">{element}</p>
  </div>
);
GenInfo.propTypes = {
  top: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  color: PropTypes.shape.isRequired,
};

export default GenInfo;
