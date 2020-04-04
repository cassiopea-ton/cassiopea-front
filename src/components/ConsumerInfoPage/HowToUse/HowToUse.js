import React from "react";
import "./HowToUse.scss";
import howTo from "./img/howToUse.png";

const HowToUse = () => {
  return (
    <div className="how__to__cointainer">
      <div className="container">
        <h1 className="container__article">How to use an oracle?</h1>

        <p className="container__text cons">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p className="container__text cons">
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          </p>
         
           <p className="container__text cons"> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante.
        </p>
      </div>
      <div className="container__img">
        <img src={howTo} alt="howTo.jpg" />
      </div>
    </div>
  );
};

export default HowToUse;
