import React from 'react';
import './BeOracleInfo.scss';
import img from './oracleInfo.png';

const BeOracleInfo = () => (
  <div className="be__oracle__info">
    <div className="be__oracle__info_container">
      <div className="be__oracle__info__img">
        <img src={img} alt="BeOracleInfo" />
      </div>
      <div className="oracle__info__container-content">
        <h1 className="container__article be__oracle__info__article">
          I am ready. So what?
        </h1>
        <p className="container__text">
          First things first, you need to download the current stable version
          of our oracle client. All commands are available in
          our README-file. There you find some useful commands to fastly get
          started with Cassiopeia.
        </p>
        <p className="container__text">
          At this time client supports only cli version, but there should not
          be any troubles and available in our github repo, so don`t worry if
          there is no downloading after you clicked
        </p>

        <p className="container__text">
          All commands are available in our README file. There you find some
          useful commands to get started immensely with Cassiopeia. Check this out right now!
        </p>
      </div>
    </div>
    <div className="be-oracle-info__button">
      <a
        className="request__button be-oracle-info__button_red"
        href="https://github.com/cassiopea-ton/cassiopeia-oracle"
      >
        Click to download
      </a>
    </div>
  </div>
);

export default BeOracleInfo;
