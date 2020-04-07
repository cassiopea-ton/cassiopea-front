import React from "react";
import "./Providers.scss";
import StatTableHead from "../../StatTableHead/StatTableHead";
import StatTableBody from "../../StatTableBody/StatTableBody";
const { BagOfCells } = require("cassiopeia-ton-sdk");

const Providers = (props) => {
  const { tonClient } = props;
  return (
    <div className="providers__container">
      <div className="container__table">
        <table className="container__table__wrapper">
          <StatTableHead />
          <StatTableBody client={tonClient} />
        </table>
      </div>
    </div>
  );
};

export default Providers;
