import React from "react";

import "./StatisticTable.scss";
import ItemStat from "../ItemStat/ItemStat";

const tableInfo = [
  "Address",
  "Type",
  "Min. Oracles ",
  "Oracle Counter",
  "Last Update",
  "Frequence",
  "Tag",
  "Source "
];

export default () => (
  <div>
    <span className="table__info">
      {tableInfo.map(item => {
        return (
         <ItemStat data={item} />
        );
      })};
    
    </span>
  </div>
);
