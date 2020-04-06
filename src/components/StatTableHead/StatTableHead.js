import React from "react";

import "./StatTableHead.scss";

const tableInfo = [
  "Address",
  "Type",
  "Min. Oracles ",
  "Oracle Counter",
  "Last Update",
  "Frequency",
  "Tag",
  "Source",
];

export default () => (
  <thead className="table__head">
    <tr>
      {tableInfo.map((item, index) => {
        return (
          <th key={index} data={item} className="table__article">
            {item}
          </th>
        );
      })}
    </tr>
  </thead>
);
