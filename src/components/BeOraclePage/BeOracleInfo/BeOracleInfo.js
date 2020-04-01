import React from "react";
import "./BeOracleInfo.scss";
import img from "./oracleInfo.png";
const BeOracleInfo = () => {
  return (
    <div className="be__oracle__info">
      <div className="be__oracle__info__cointainer">
        <div className="be__oracle__info__img">
          <img src={img} alt="BeOracleInfo" />
        </div>
        <div className="oracle__info__container__content">
          <h1 className="container__article be__oracle__info__article">
            I am ready. So what?
          </h1>
          <p className="container__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <p className="container__text">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus.
          </p>

          <p className="container__text">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </p>
        </div>
      </div>
      <div className="be__oracle__info__button">
        <a className="request__button be__oracle__info__button__red" href='https://github.com/cassiopea-ton/cassiopeia-oracle'>Click to download</a>
      </div>
    </div>
  );
};

export default BeOracleInfo;
