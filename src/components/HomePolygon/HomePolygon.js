import React from "react";
import "./HomePolygon.scss";
import polygon from "./img/Polygon.png";

const HomePolygon = props => {

  return (
    <div className="polygon">
      <img className="polygon__img" src={polygon} alt="polygon" />
      <div className="polygon__block">
        <h1 className="polygon__article">Cassiopeia</h1>
        <p className="polygon__text">
          <span></span>Real-world data for your smart contracts.<span></span>
          Don’t limit your DAPP.
        </p>
      </div>
    
    </div>
  );
};
export default HomePolygon;
