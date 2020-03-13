import React from "react";
import "./ItemStat.scss";
import { uniqueId } from "lodash";

const ItemStat = ({ data }) => (
    <React.Fragment key={uniqueId()}>
      <p >{data}</p>
    </React.Fragment>
);

export default ItemStat;
