import React from 'react';
import './RequestContent.scss';
import PropTypes from 'prop-types';
import RequestButton from '../RequestButton/RequestButton';

const RequestContent = ({ text, content, path }) => (
  <div className="wrapper__container">
    <p>{text}</p>
    <RequestButton content={content} path={path} />
  </div>
);

RequestContent.propTypes = {
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RequestContent;
