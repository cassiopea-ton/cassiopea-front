import React from 'react';
import './ReadyToJoin.scss';
import RequestContent from '../../RequestContent/RequestContent';

const requestOracleBlock = 'Start searching an appropriate data provider for your demands';
const beOracleBlock = 'If you desire to sell the data to others just click down below';

const ReadyToJoin = () => (
  <div className="to__join">
    <h3 className="wrapper__article">Ready to join?</h3>
    <div className="ready__to__join__wrapper">
      <RequestContent text={requestOracleBlock} content="Request data!" path="/cassiopea-front/howto/consumer" />
      <RequestContent text={beOracleBlock} content="Be an Oracle!" path="/cassiopea-front/howto/oracle" />
    </div>
  </div>
);

export default ReadyToJoin;
