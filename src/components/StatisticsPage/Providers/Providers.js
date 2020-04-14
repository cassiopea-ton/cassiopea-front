import React from "react";
import "./Providers.scss";
import StatTableHead from "../../StatTableHead/StatTableHead";
import StatTableBody from "../../StatTableBody/StatTableBody";
import {connect} from 'react-redux'

const Providers = (props) => {
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

 const mapStateToProps = state => {
   console.log(state);
   return {
     tonclient: state 
   };
 }


export default connect(mapStateToProps, null) (Providers);
