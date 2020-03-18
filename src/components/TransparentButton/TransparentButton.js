import React from "react";
import { Link } from "react-router-dom";
import "./TransparentButton.scss";

const TransparentButton = (props) => (
  <div className="transparrent__button">
    <Link to={props.path}>Look at stats</Link>
  </div>
);

export default TransparentButton;
