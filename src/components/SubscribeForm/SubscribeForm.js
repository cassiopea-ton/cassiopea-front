import React from 'react';
import './SubscribeForm.scss';

function SubscribeForm() {
  return (
      <form className="email__input">
        <input type="text" placeholder="name@email.com"></input>
        <button>--></button>
      </form>
  );
}

export default SubscribeForm;