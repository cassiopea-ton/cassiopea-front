import React from "react";
import "./RequestOption.scss";

const RequestOption = props => {
  return (
    <label className={props.class_name} style={props.buttonColor}>
        <input
          onClick={props.onClick}
          id="radio-1"
          type="radio"
          name="radio"
          value={props.value}
          checked
        />
      <p>{props.content}</p></label>
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
