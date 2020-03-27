import React from "react";
import "./SubscribeForm.scss";

const SubscribeForm = () => (
  <div class="subscriber__form">
    <h3 className="footer__article">Not ready to start now? Keep in touch!</h3>
    <form className="email__input">
      <input type="text" placeholder="name@email.com"></input>
      <button>-- ></button>
    </form>
  </div>
);

export default SubscribeForm;
