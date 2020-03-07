import React from 'react';
import './FooterSubmit.scss';

function FooterSubmit() {
  return (
      <form className="email__input">
        <input type="text" placeholder="name@email.com"></input>
        <button>--></button>
      </form>
  );
}

export default FooterSubmit;
