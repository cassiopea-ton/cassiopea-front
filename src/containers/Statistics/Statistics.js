import React from "react";
import "./Statistics.scss";
import StatisticsPolygon from "../../components/StatisticsPolygon/StatisticsPolygon";
import Providers from "../../components/Providers/Providers";



const Statistics = () => (
  <div className="stats">
    <StatisticsPolygon />
    <Providers />
  </div>
);

export default Statistics;
