import './NavbarHeader.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarHeader(props) {
  return (
    <div className='navbar_header'>
      <div className='navbar_logo'>
        <div className='logo_box'>
          <Link to='/'>THE CODING SCHOOL</Link>
        </div>
      </div>
    </div>
  );
}
