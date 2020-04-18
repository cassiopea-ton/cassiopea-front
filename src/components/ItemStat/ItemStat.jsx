import React from "react";
import "./ItemStat.scss";
import { uniqueId } from "lodash";

const ItemStat = ({ data }) => (
    <React.Fragment key={uniqueId()}>
      <td >{data}</td>
    </React.Fragment>
);

export default ItemStat;
