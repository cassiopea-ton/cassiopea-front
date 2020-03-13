import React from "react";
import "./Statistics.scss";
import StatisticsPolygon from "../../components/StatisticsPolygon/StatisticsPolygon";
import Providers from "../../components/Providers/Providers";
import StatisticTable from "../../components/StatiscticTable/StatisticTable";



const Statistics = () => (
  <div className="stats">
    <StatisticsPolygon />
    <Providers />
  </div>
);

export default Statistics;
