import React from "react";
import "./Providers.scss";
import StatisticTable from "../../components/StatiscticTable/StatisticTable";
import StatList from "../../components/StatList/StatList";

const Providers = () => (
  <div className="providers__container">
    <div className="container__table">
      <table>
        <StatisticTable />
        <StatList />
      </table>
    </div>
  </div>
);
  export default Providers;
