import React from "react";
import "./StatTableBody.scss";

const tableBodyInfo = [
  "-1:3451..a155",
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  "mad.bet.com",
];

const tableHeadInfo = [
  "Address",
  "Type",
  "Min. Oracles ",
  "Oracle Counter",
  "Last Update",
  "Frequency",
  "Tag",
  "Source",
];

const element = tableHeadInfo.map((elem, index) => {
  return (
    <td key={index} data-label={elem}>
      {tableBodyInfo[index]}
    </td>
  );
});

const items = Array(20).fill(element);

export default (props) => {
  const { createTonclient } = props;
      console.log(createTonclient)
  return (
    <tbody>
      {items.map((i, index) => {
        return (
          <tr key={index} className="table__info alt">
            {i}
          </tr>
        );
      })}
    </tbody>
  );
};


