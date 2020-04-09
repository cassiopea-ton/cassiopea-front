import React from "react";
import "./Providers.scss";
import StatTableHead from "../../StatTableHead/StatTableHead";
import StatTableBody from "../../StatTableBody/StatTableBody";
import {connect} from 'react-redux'
const { BagOfCells } = require("cassiopeia-ton-sdk");
const { TONClient } = require("ton-client-node-js");


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


 const mapStateToProps = state => {
   console.log(state);
   return {
     tonClient : state.ton.client
   };
 }

export default connect(mapStateToProps, null) (Providers);
