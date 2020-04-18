import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './OracleSearchForm.scss';
import RequestOption from '../../RequestOption/RequestOption';

const OracleSearchForm = (props) => {
  const [button, setButton] = useState(null);
  const { client } = props;
  const initClient = () => client;

  const [buttonStyles] = useState({
    backgroundColor: '#B60002',
  });
  const [buttonStylesDark] = useState({
    backgroundColor: '#0D0829',
  });
  useEffect(() => initClient());
  const handleClick = () => {
    setButton(!button);
  };
  const btnColor = {
    backgroundColor: '#b60002',
    height: '51px',
    width: '360px',
    lineHeight: '3px',
    color: '#e5e5e5',
    border: 0,
    fontSize: '18px',
    fontWeight: '400',

  };
  const btnClass = {
    class_name: 'request__button',
  };
  return (
    <div className="providers__search__container">
      <div className="providers__form">
        <form className="form__container">
          <div className="search__article">Provider’s search</div>
          <div className="button__group group__top">
            <RequestOption
              content="Public"
              value="public"
              buttonColor={button ? buttonStylesDark : buttonStyles}
              onClick={handleClick}
            />
            <RequestOption
              value="private"
              content="Private"
              onClick={handleClick}
              buttonColor={button ? buttonStyles : buttonStylesDark}
            />
          </div>
          <div className="form__row row__top">
            <input type="text" placeholder="url" className=" inp input__left" />
            <input
              type="text"
              placeholder="data type"
              className=" inp input__right"
            />
          </div>
          <div className="form__row row__bottom">
            <input
              type="text"
              placeholder="price per call"
              className=" inp input__left"
            />
            <input
              type="text"
              placeholder="valid until"
              className=" inp input__right"
            />
          </div>
          <textarea disabled />
          <div className="button__group group__top">
            <button type="button" className={btnClass.class_name} style={btnColor}>Search</button>
            <button type="button" className={btnClass.class_name} style={btnColor}>Request!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

OracleSearchForm.propTypes = {
  client: PropTypes.shape.isRequired,
};

export default OracleSearchForm;
