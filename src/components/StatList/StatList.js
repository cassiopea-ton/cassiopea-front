import React from "react";
import "./StatList.scss";

const listInfo = [
  "-1:3451..a155",
  "public",
  15,
  45,
  "5m ago",
  "5h",
  "Currency Pair",
  "mad.bet.com"
];
const element = listInfo.map(elem => {
  return <td className>{elem}</td>;
});
const items = Array(20).fill(element);
console.log(typeof items);

const StatList = () => (
  <tbody>
    {items.map(i => {
      return <tr className="table__info alt">{i}</tr>;
    })}
  </tbody>
);
export default StatList;
