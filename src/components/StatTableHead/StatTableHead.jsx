import React from 'react'
import { tableHeadInfo } from '../StatTableBody/dataStat'
import './StatTableHead.scss'


export default () => (
  <thead className="table__head">
    <tr>
      {tableHeadInfo.map((item, index) => (
        <th key={index.id} data={item} className="table__article">
          {item}
        </th>
      ))}
    </tr>
  </thead>
);
