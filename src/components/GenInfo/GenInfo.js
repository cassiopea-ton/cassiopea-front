import React from "react";
import "./GenInfo.scss";

const GenInfo = props => {
  const { top, element, color } = props;
  return (
    <div className="info__block" style={{ color: color }}>
      <p className="info__element top">{top}</p>
      <p className="info__element">{element}</p>
    </div>
  );
};
export default GenInfo;
