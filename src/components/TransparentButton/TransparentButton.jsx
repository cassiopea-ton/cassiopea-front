import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TransparentButton.scss';

const TransparentButton = ({path}) => (
  <div className="transparrent__button">
    <Link to={path}>Look at stats</Link>
  </div>
);

TransparentButton.propTypes = {
  path: PropTypes.string.isRequired,
};
export default TransparentButton;
