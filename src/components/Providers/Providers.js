import React from "react";
import "./Providers.scss";
import StatisticTable from "../../components/StatiscticTable/StatisticTable";
import StatList from "../../components/StatList/StatList";

const Providers = props => {

  const { tonClient } = props;

  return (
    <div className="providers__container">
      <div className="container__table">
        <table>
          <StatisticTable />
          <StatList client = {tonClient}  />
        </table>
      </div>
    </div>
  );
};

export default Providers;
