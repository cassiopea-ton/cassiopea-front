import React from "react";
import "./Statistics.scss";
import StatisticsPolygon from "../../components/StatisticsPage/StatisticsPolygon/StatisticsPolygon";
import Providers from "../../components/StatisticsPage/Providers/Providers";
import StatisticsStat from "../../components/StatisticsPage/StatisticsStat/StatisticsStat";
import ReadyToJoin from "../../components/StatisticsPage/ReadyToJoin/ReadyToJoin";

const Statistics = props => {
  const { client } = props;

  return (
    <div className="stats__container">
      <StatisticsPolygon />
      <Providers tonClient={client} />  
      <StatisticsStat />
      <ReadyToJoin />
    </div>
  );
};
export default Statistics;
