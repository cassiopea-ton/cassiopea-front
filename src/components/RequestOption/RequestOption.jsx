import React from 'react';
import './RequestOption.scss';
import PropTypes from 'prop-types';

const RequestOption = ({
  name, buttonColor, value, content, onClick,
}) => (
  <label className={name} style={buttonColor} htmlFor="radio-1">
    <input
      onClick={onClick}
      id="radio-1"
      type="radio"
      name="radio"
      value={value}
      defaultChecked
    />
    <p>{content}</p>
  </label>
);

RequestOption.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  buttonColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
RequestOption.defaultProps = {
  content: 'Request data!',
  name: 'request__button',
  buttonColor: {
    backgroundColor: '#b60002',
  },
};


export default RequestOption;
