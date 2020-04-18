import React from 'react';

const tableBodyInfo = [
  '-1:3451..a155',
  'public',
  15,
  45,
  '5m ago',
  '5h',
  'Currency Pair',
  'mad.bet.com',
];

const StatTableCell = ({ dataLabel }) => (
  tableBodyInfo.map((elem) => <td data-label={dataLabel}>{elem}</td>)
);

export default StatTableCell;
