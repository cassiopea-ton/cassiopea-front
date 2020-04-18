import React from 'react';
import './HomeStatInfo.scss';

const HomeStatInfo = () => (
  <div className="home__stat">
    <div className="general__stats">
      <div className="stats__block">
        <h3 className="block__article">98</h3>
        <span className="block__element">providers</span>
      </div>
      <div className="stats__block">
        <h3 className="block__article">100+</h3>
        <span className="block__element">daaps</span>
      </div>
      <div className="stats__block">
        <h3 className="block__article">10382</h3>
        <span className="block__element">requests</span>
      </div>
    </div>
  </div>
);

export default HomeStatInfo;
