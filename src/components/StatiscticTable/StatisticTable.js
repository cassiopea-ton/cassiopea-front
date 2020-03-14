import React from "react";

import "./StatisticTable.scss";
import ItemStat from "../ItemStat/ItemStat";

const tableInfo = [
  "Address",
  "Type",
  "Min. Oracles ",
  "Oracle Counter",
  "Last Update",
  "Frequency",
  "Tag",
  "Source"
];

export default () => (
  <thead className="table__head">
    {tableInfo.map(item => {
      return <ItemStat data={item} className={"classname"} />;
    })}
      </thead>
);
