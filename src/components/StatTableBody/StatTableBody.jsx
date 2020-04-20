/* eslint-disable react/no-array-index-key */
import React from 'react';
import './StatTableBody.scss';

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

const tableHeadInfo = [
  'Address',
  'Type',
  'Min. Oracles ',
  'Oracle Counter',
  'Last Update',
  'Frequency',
  'Tag',
  'Source',
];

const element = tableHeadInfo.map((elem, i) => (
  <td key={i} data-label={elem}>
    {tableBodyInfo[i]}
  </td>
));

const items = Array(20).fill(element);

const StatTableBody = () => (
  <tbody>
    {items.map((i, index) => (
      <tr key={index} className="table__info alt">
        {i}
      </tr>
    ))}
  </tbody>
);
export default StatTableBody;
