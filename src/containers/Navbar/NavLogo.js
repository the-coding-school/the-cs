import React from 'react';
import { Link } from 'react-router';

export default class NavLogo extends React.Component {
  render() {
    return (
      <div className='navbar_logo'>
        <div className='logo_box'>
          <Link to='/'>THE CODING SCHOOL</Link>
        </div>
      </div>
    );
  }
}
