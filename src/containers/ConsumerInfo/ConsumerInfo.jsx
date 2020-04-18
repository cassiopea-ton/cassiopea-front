import React from 'react';
import PropTypes from 'prop-types';
import './ConsumerInfo.scss';
import HowToUse from '../../components/ConsumerInfoPage/HowToUse/HowToUse';
import RequestAnOraclePolygon from '../../components/ConsumerInfoPage/RequestAnOraclePolygon/RequestAnOraclePolygon';
import OracleSearchForm from '../../components/ConsumerInfoPage/OracleSearchForm/OracleSearchForm';

const ConsumerInfo = ({ client }) => (

  <div className="consumer">
    <RequestAnOraclePolygon />
    <HowToUse />
    <OracleSearchForm tonClient={client} />
  </div>
);


ConsumerInfo.propTypes = {
  client: PropTypes.shape.isRequired,
};


export default ConsumerInfo;
