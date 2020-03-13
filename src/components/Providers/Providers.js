import React from "react";
import "./Providers.scss";
import StatisticTable from "../../components/StatiscticTable/StatisticTable";
import StatList from "../../components/StatList/StatList";


const Providers = () => (
  <div className="providers__container">
    <div className="container__article">
        <h1>Not sure what provider to use? Look at statistics!</h1>
        <StatisticTable />
        <StatList />
    </div>
  </div>
);

export default Providers;
