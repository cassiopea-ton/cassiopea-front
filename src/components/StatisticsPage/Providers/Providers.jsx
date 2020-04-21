import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StatTableHead from '../../StatTableHead/StatTableHead';
import StatTableBody from '../../StatTableBody/StatTableBody';
import './Providers.scss';

const Providers = ({ tonClient }) => {

  return (
    <div className="providers__container">
      <div className="providers__container_table">
        <table className="container__table_wrapper">
          <StatTableHead />
          <StatTableBody />
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.tonClient);
  return {
    tonClient: state,
  };
};
Providers.propTypes = {
  tonClient: PropTypes.shape.isRequired,
};
export default connect(mapStateToProps, null)(Providers);



