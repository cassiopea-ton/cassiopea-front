import React from "react";
import "./OracleSearchForm.scss";
import RequestButton from "../RequestButton/RequestButton";




const OracleSearchForm = () => (
  <div className="providers__search__container">
    <div className="providers__form">
      <form className="form__container">
      <div className="search__article">Provider’s search</div>
      <div className="button__group group__top">
      {/* <RadioGroup name="test">
        <Radio className="request__button__option" value="Public" />
        <Radio className="request__button__option" value="Private" />
      </RadioGroup> */}
        <option className="request__button__option" value="Public">Public</option>
        <option className="request__button__option" value="Private">Private</option>
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
