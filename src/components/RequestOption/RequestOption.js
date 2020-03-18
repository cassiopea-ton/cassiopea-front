import React from "react";
import "./RequestOption.scss";

const RequestOption = props => {
  return (
    <div className={props.class_name} style={props.buttonColor}>
      <div class="form_radio_btn">
        <input
          onClick={props.onClick}
          id="radio-1"
          type="radio"
          name="radio"
          value={props.value}
          checked
        />
        <label for="radio-1">{props.content}</label>
      </div>
    </div>
  );
};

RequestOption.defaultProps = {
  content: "Request data!",
  class_name: "request__button",
  buttonColor: {
    backgroundColor: "#b60002"
  }
};

export default RequestOption;
