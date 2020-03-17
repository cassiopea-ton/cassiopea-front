import React from "react";
import "./OracleSearchForm.scss";
import RequestButton from "../RequestButton/RequestButton";


const buttonStyles = {
  backgroundColor: "#0D0829",
}

const OracleSearchForm = () => (
  <div className="providers__search__container">
    <div className="providers__form">
      <form className="form__container">
      <div className="search__article">Provider’s search</div>
      <div className="button__group group__top">
        <RequestButton content="Public"  />
        <RequestButton content="Private"buttonColor={buttonStyles} />
      </div>
      <div className="form__row row__top">
        <input type="text" placeholder="url" className=" inp input__left" />
        <input type="text" placeholder="data type" className=" inp input__right" />
      </div>
      <div className="form__row row__bottom">
        <input type="text" placeholder="price per call" className=" inp input__left" />
        <input type="text" placeholder="valid until" className=" inp input__right" />
      </div>
      <textarea></textarea>
      <div className="button__group group__top">
        <RequestButton content="Search" />
        <RequestButton content="Request!" />
      </div>
      </form>
    </div>
  </div>
);
export default OracleSearchForm;
