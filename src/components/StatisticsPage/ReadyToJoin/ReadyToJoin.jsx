import React from 'react';
import './ReadyToJoin.scss';
import RequestContent from '../../RequestContent/RequestContent';

const requestOracleBlock = 'Start searching an appropriate data provider for your demands';
const beOracleBlock = 'If you desire to sell the data to others just click down below';

const ReadyToJoin = () => (
  <div className="to__join">
    <h3 className="to__join_article">Ready to join?</h3>
    <div className="to__join_wrapper">
      <RequestContent text={requestOracleBlock} content="Request data!" path="/cassiopea-front/howto/consumer" />
      <RequestContent text={beOracleBlock} content="Be an Oracle!" path="/cassiopea-front/howto/oracle" />
    </div>
  </div>
);

export default ReadyToJoin;
