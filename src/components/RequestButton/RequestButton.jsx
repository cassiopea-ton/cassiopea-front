import React from 'react';
import { Link } from 'react-router-dom';
import './RequestButton.scss';
import PropTypes from 'prop-types';

const RequestButton = (props) => {
  const {
    nameClass, buttonColor, content, onClick, path,
  } = props;
  return (
    <div className={nameClass} style={buttonColor}>
      <Link onClick={onClick} to={path}>{content}</Link>
    </div>
  );
};
RequestButton.defaultProps = {
  content: 'Request data!',
  nameClass: 'request__button',
  buttonColor: {
    backgroundColor: '#b60002',
  },
};

RequestButton.propTypes = {
  nameClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  content: PropTypes.string,
  buttonColor: PropTypes.shape,
};
export default RequestButton;
