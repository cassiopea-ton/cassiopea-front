import React from "react";
import { connect } from "react-redux";
import "./Providers.scss";
import StatTableHead from "../../StatTableHead/StatTableHead";
import StatTableBody from "../../StatTableBody/StatTableBody";
import abi from '../../../abi';
const { BagOfCells } = require("cassiopeia-ton-sdk");

const Providers = (props) => {
  const { tonClient } = props;
 
  return (
    <div className="providers__container">
      <div className="container__table">
        <table className="container__table__wrapper">
          <StatTableHead />
          <StatTableBody />
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tonClient: state,
  };
};

export default connect(mapStateToProps, null)(Providers);
