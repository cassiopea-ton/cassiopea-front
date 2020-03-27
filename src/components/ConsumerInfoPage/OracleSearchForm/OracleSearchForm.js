import React, { useState, useEffect } from "react";
import "./OracleSearchForm.scss";
import RequestButton from "../../RequestButton/RequestButton";
import RequestOption from "../../RequestOption/RequestOption";

const OracleSearchForm = props => {
  const [button, setButton] = useState(null);

  const initClient = () => {
    const { client } = props;
  };
  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "#B60002"
  });
  const [buttonStylesDark, setButtonStylesDark] = useState({
    backgroundColor: "#0D0829"
  });
  useEffect(() => {
    initClient();
    console.log("Client initiated in OracleSearchForm");
  });
  const handleClick = () => {
    setButton(!button);
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
          <textarea disabled></textarea>
          <div className="button__group group__top">
            <RequestButton content="Search" to="" />
            <RequestButton content="Request!" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OracleSearchForm;
