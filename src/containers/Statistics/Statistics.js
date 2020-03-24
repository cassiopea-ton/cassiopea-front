import React from "react";
import "./Statistics.scss";
import StatisticsPolygon from "../../components/StatisticsPolygon/StatisticsPolygon";
import Providers from "../../components/Providers/Providers";
import StatisticsStat from "../../components/StatisticsStat/StatisticsStat";
import ReadyToJoin from "../../components/ReadyToJoin/ReadyToJoin";

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
