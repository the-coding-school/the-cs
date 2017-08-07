import React from 'react';

import './NavbarHamburger.scss';

export default function NavbarHamburger(props) {
  return (
    <div
      className='navbar_hamburger'
      onClick={props.onClick}
    >
      <div/><div/><div/>
    </div>
  );
}
