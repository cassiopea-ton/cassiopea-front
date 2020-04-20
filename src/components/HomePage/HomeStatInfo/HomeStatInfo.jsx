import React from 'react';
import './HomeStatInfo.scss';

const HomeStatInfo = () => (
  <div className="home__stat">
    <div className="general__stats">
      <div className="stats__block">
        <h3 className="stats__block_article">98</h3>
        <span className="stats__block_element">providers</span>
      </div>
      <div className="stats__stats__block">
        <h3 className="stats__block_article">100+</h3>
        <span className="stats__block_element">daaps</span>
      </div>
      <div className="stats__block">
        <h3 className="stats__block_article">10382</h3>
        <span className="stats__block_element">requests</span>
      </div>
    </div>
  </div>
);

export default HomeStatInfo;
